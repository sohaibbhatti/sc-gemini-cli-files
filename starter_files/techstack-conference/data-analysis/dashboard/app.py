from flask import Flask, render_template, jsonify, request
import pandas as pd
from sqlalchemy import create_engine
import os

app = Flask(__name__)

# Database connection
DB_URL = os.getenv('DATABASE_URL', 'postgresql://@localhost:5432/gemini_cli_practise')
engine = create_engine(DB_URL)

def get_data():
    return pd.read_sql("SELECT * FROM leads", engine)

@app.route('/')
def index():
    df = get_data()
    metrics = {
        'total': len(df),
        'hot': len(df[df['priority_segment'] == 'Hot']),
        'warm': len(df[df['priority_segment'] == 'Warm']),
        'cold': len(df[df['priority_segment'] == 'Cold'])
    }
    return render_template('index.html', metrics=metrics)

@app.route('/api/stats')
def api_stats():
    df = get_data()
    
    # Lead Segment distribution
    segment_counts = df['priority_segment'].value_counts().to_dict()
    
    # Top 5 Companies
    top_companies = df['company'].value_counts().head(5).to_dict()
    
    # Top Countries
    top_countries = df['country'].value_counts().head(10).to_dict()
    
    return jsonify({
        'segments': segment_counts,
        'companies': top_companies,
        'countries': top_countries
    })

@app.route('/leads')
def leads():
    df = get_data()
    # Basic filtering if needed, but we'll do it client-side for simplicity in this prototype
    leads_list = df.to_dict(orient='records')
    return render_template('leads.html', leads=leads_list)

@app.route('/lead/<email>')
def profile(email):
    # Fetch lead by email
    query = f"SELECT * FROM leads WHERE email = '{email}'"
    df = pd.read_sql(query, engine)
    if df.empty:
        return "Lead not found", 404
    lead = df.iloc[0].to_dict()
    return render_template('profile.html', lead=lead)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
