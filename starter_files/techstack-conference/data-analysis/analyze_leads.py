import pandas as pd
from sqlalchemy import create_engine
import re
from collections import Counter

# Connect to the database
engine = create_engine('postgresql://@localhost:5432/gemini_cli_practise')

def run_analysis():
    df = pd.read_sql("SELECT * FROM leads", engine)
    
    # 1. Key Metrics
    unique_leads = len(df)
    hot_leads = len(df[df['priority_segment'] == 'Hot'])
    warm_leads = len(df[df['priority_segment'] == 'Warm'])
    cold_leads = len(df[df['priority_segment'] == 'Cold'])
    
    # 2. Audience Insights
    top_companies = df['company'].value_counts().head(5)
    top_countries = df['country'].value_counts().head(5)
    top_titles = df['title'].value_counts().head(5)
    
    # 3. Conference Insights
    # Session counts
    all_sessions = []
    for s_id in df['session_id'].dropna():
        all_sessions.extend(s_id.split(';'))
    
    session_counts = Counter(all_sessions)
    
    # Session types
    session_types = Counter()
    for s in all_sessions:
        match = re.match(r'^([A-Z]+[0-9]*)', s)
        if match:
            session_types[match.group(1)] += 1
            
    # Most attended per type
    most_attended_per_type = {}
    for stype in session_types.keys():
        type_sessions = {k: v for k, v in session_counts.items() if k.startswith(stype)}
        if type_sessions:
            most_attended_per_type[stype] = max(type_sessions.items(), key=lambda x: x[1])

    # Popular session topics (from notes)
    all_notes = " ".join(df['notes'].fillna("").values).lower()
    keywords = ["cloud", "kubernetes", "security", "ai", "machine learning", "python", "rust", "gdpr", "data warehouse", "microservices", "serverless", "api", "automated testing"]
    topic_counts = {}
    for kw in keywords:
        topic_counts[kw] = all_notes.count(kw)
    
    sorted_topics = sorted(topic_counts.items(), key=lambda x: x[1], reverse=True)

    print("--- KEY METRICS ---")
    print(f"Unique Leads: {unique_leads}")
    print(f"Hot: {hot_leads}")
    print(f"Warm: {warm_leads}")
    print(f"Cold: {cold_leads}")
    
    print("\n--- TOP COMPANIES ---")
    print(top_companies)
    
    print("\n--- TOP COUNTRIES ---")
    print(top_countries)
    
    print("\n--- TOP TITLES ---")
    print(top_titles)
    
    print("\n--- MOST ATTENDED SESSIONS PER TYPE ---")
    for stype, info in most_attended_per_type.items():
        print(f"{stype}: {info[0]} ({info[1]} attendees)")
        
    print("\n--- POPULAR TOPICS ---")
    for topic, count in sorted_topics[:5]:
        print(f"{topic}: {count} mentions")

if __name__ == "__main__":
    run_analysis()
