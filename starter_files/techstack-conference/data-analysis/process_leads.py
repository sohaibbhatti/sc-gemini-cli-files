import pandas as pd
import glob
import os

def process_leads():
    # 1. Collect all lead files
    local_files = glob.glob('lead-scan/*.csv')
    drive_files = glob.glob('drive-leads/*.csv')
    all_files = local_files + drive_files
    
    if not all_files:
        print("No lead files found!")
        return
    
    # 2. Load all datasets
    dfs = []
    for f in all_files:
        try:
            df = pd.read_csv(f)
            dfs.append(df)
        except Exception as e:
            print(f"Error reading {f}: {e}")
            
    raw_df = pd.concat(dfs, ignore_index=True)
    total_raw = len(raw_df)
    
    # 3. Validation: Filter out missing or invalid emails
    # Email must have '@' and a domain extension (basic check)
    valid_email_mask = raw_df['Email'].notna() & raw_df['Email'].str.contains(r'[^@]+@[^@]+\.[^@]+', regex=True)
    invalid_records = raw_df[~valid_email_mask]
    cleaned_df = raw_df[valid_email_mask].copy()
    invalid_count = len(invalid_records)
    
    # 4. Sorting for Conflict Resolution (Latest Timestamp)
    # Ensure Timestamp is datetime
    cleaned_df['Timestamp'] = pd.to_datetime(cleaned_df['Timestamp'], format='mixed')
    # Sort by Email and Timestamp descending so the first record is the most recent
    cleaned_df = cleaned_df.sort_values(['Email', 'Timestamp'], ascending=[True, False])
    
    # 5. Group by Email and Aggregate
    # Rules:
    # - Name, Company, Phone: from the most recent 'Timestamp' (already first)
    # - Session ID: semicolons-separated list
    # - Notes: appended together
    # - Lead Score: Highest recorded
    
    # We'll use a custom aggregation
    def aggregate_leads(group):
        latest = group.iloc[0] # most recent record based on sorting
        
        # Collect all session IDs (unique and joined)
        session_ids = ";".join(group['Session ID'].dropna().astype(str).unique())
        
        # Collect all notes (joined with a space)
        notes = " | ".join(group['Notes'].dropna().astype(str))
        
        # Highest Lead Score
        max_score = group['Lead Score'].max()
        
        # Use first record for most metadata (Name, Company, Phone, etc)
        res = latest.copy()
        res['Session ID'] = session_ids
        res['Notes'] = notes
        res['Lead Score'] = max_score
        return res

    final_df = cleaned_df.groupby('Email', as_index=False).apply(aggregate_leads)
    unique_leads = len(final_df)
    
    # 6. Score & Segment
    # Hot: Score > 75
    # Warm: Score between 40 and 75
    # Cold: Score < 40
    def segment(score):
        if score > 75: return 'Hot'
        if score >= 40: return 'Warm'
        return 'Cold'
    
    final_df['Priority_Segment'] = final_df['Lead Score'].apply(segment)
    
    # Report Counts
    segment_counts = final_df['Priority_Segment'].value_counts().to_dict()
    
    print(f"--- Data Processing Report ---")
    print(f"Total Raw Records: {total_raw}")
    print(f"Invalid Records Dropped: {invalid_count}")
    print(f"Unique Leads Identified: {unique_leads}")
    print(f"Segment Breakdown: {segment_counts}")
    
    # 7. Save the final dataset
    final_df.to_csv('crm_import_ready.csv', index=False)
    print("Final cleaned dataset saved to crm_import_ready.csv")

if __name__ == "__main__":
    process_leads()
