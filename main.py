from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.templating import Jinja2Templates
from datetime import datetime

app = FastAPI()

# Middleware for CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files (CSS, JS, etc.)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Set up Jinja2 template directory
templates = Jinja2Templates(directory="templates")

# Route for index.html
@app.get("/", response_class=HTMLResponse)
async def load_index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/home", response_class=HTMLResponse)
async def load_home(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})

@app.get("/features", response_class=HTMLResponse)
async def load_features(request: Request):
    return templates.TemplateResponse("features.html", {"request": request})

@app.get("/findlocation", response_class=HTMLResponse)
async def load_findlocation(request: Request):
    return templates.TemplateResponse("findlocationonmap.html", {"request": request})


@app.get("/about", response_class=HTMLResponse)
async def load_about(request: Request):
    return templates.TemplateResponse("about.html", {"request": request})

@app.get("/contact", response_class=HTMLResponse)
async def load_contact(request: Request):
    return templates.TemplateResponse("contact.html", {"request": request})


# Route to handle logging
@app.post("/log-access")
async def log_access(request: Request):
    data = await request.json()
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"[{timestamp}] IP: {request.client.host}, Agent: {data.get('agent')}, Location: {data.get('location')}\n"

    with open("access_log.txt", "a") as f:
        f.write(log_entry)

    return {"status": "logged"}

# from fastapi import FastAPI, Request
# from fastapi.middleware.cors import CORSMiddleware
# from datetime import datetime

# app = FastAPI()

# # Allow requests from your frontend
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# @app.post("/log-access")
# async def log_access(request: Request):
#     data = await request.json()
#     timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
#     log_entry = f"[{timestamp}] IP: {request.client.host}, Agent: {data.get('agent')}, Location: {data.get('location')}\n"

#     with open("access_log.txt", "a") as f:
#         f.write(log_entry)
    
#     return {"status": "logged"}
