from typing import Optional
import pandas as pd
import json
from fastapi import FastAPI
from fastapi.responses import JSONResponse
app = FastAPI()


@app.get("/")
def read_root():
    sheet_url = "https://docs.google.com/spreadsheets/d/1igsJ_8jIlBIrVCPm5knI7R98VBZwLAcWjigKM5WnteA/edit#gid=1486925662"
    url_1 = sheet_url.replace('/edit#gid=', '/export?format=csv&gid=')
    df = pd.read_csv(url_1)
    print(df)
    df = df.drop(columns = ['Full name ', 'E-mail'])
    return JSONResponse(content=df.to_json())