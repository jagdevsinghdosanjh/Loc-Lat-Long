from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI()

# Allow requests from your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/log-access")
async def log_access(request: Request):
    data = await request.json()
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"[{timestamp}] IP: {request.client.host}, Agent: {data.get('agent')}, Location: {data.get('location')}\n"

    with open("access_log.txt", "a") as f:
        f.write(log_entry)
    
    return {"status": "logged"}
