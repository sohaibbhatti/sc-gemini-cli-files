import pandas as pd
from sqlalchemy import create_engine

def push_to_db():
    try:
        # 1. Load the cleaned CSV
        df = pd.read_csv('crm_import_ready.csv')
        
        # 2. Prepare the engine (PostgreSQL)
        # Assuming default local connection (no password required for local psql in many setups)
        engine = create_engine('postgresql://@localhost:5432/gemini_cli_practise')
        
        # 3. Rename columns to match SQL table (lowercase and underscores)
        df.columns = [
            'email', 'scan_id', 'attendee_id', 'first_name', 'last_name', 
            'title', 'company', 'phone', 'address', 'city', 'state', 
            'postal_code', 'country', 'lead_score', 'qualifiers', 'notes', 
            'timestamp', 'session_id', 'priority_segment'
        ]
        
        # 4. Push data
        # 'append' if the table exists, 'fail' if it doesn't match, or 'replace' to overwrite
        # Since I created the table manually, I'll use append.
        df.to_sql('leads', engine, if_exists='append', index=False)
        
        print(f"Successfully pushed {len(df)} records to 'leads' table in 'gemini_cli_practise' database.")
        
    except Exception as e:
        print(f"Error pushing data to database: {e}")

if __name__ == "__main__":
    push_to_db()
