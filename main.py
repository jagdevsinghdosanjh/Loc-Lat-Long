from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from fastapi.templating import Jinja2Templates
from datetime import datetime
from fastapi import Form
from fastapi import status
from fastapi.responses import RedirectResponse, PlainTextResponse, FileResponse


app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static files
app.mount("/static", StaticFiles(directory="static"), name="static")

# Set up Jinja2 templates
templates = Jinja2Templates(directory="templates")

# Route for index.html
@app.get("/", response_class=HTMLResponse)
async def load_index(request: Request):
    try:
        with open("access_log.txt", "r") as f:
            logs = f.read()
    except FileNotFoundError:
        logs = "No access logs found."
    
    return templates.TemplateResponse("index.html", {
        "request": request,
        "access_logs": logs
    })

# @app.get("/", response_class=HTMLResponse)
# async def load_index(request: Request):
#     return templates.TemplateResponse("index.html", {"request": request})

# Route for about.html
@app.get("/about", response_class=HTMLResponse)
async def load_about(request: Request):
    return templates.TemplateResponse("about.html", {"request": request})



app = FastAPI()

@app.get("/holiday")
async def load_holiday():
    return FileResponse("Docs/iHRMS.pdf", media_type='application/pdf')


# @app.get("/holiday", response_class=HTMLResponse)
# async def load_holiday(request: Request):
#     return templates.TemplateResponse("/Docs/iHRMS.pdf", {"request": request})

# Route for features.html
@app.get("/features", response_class=HTMLResponse)
async def load_features(request: Request):
    return templates.TemplateResponse("features.html", {"request": request})

# Route for contact.html
@app.get("/contact", response_class=HTMLResponse)
async def load_contact(request: Request):
    return templates.TemplateResponse("contact.html", {"request": request})

# Route for liveloconmap.html
@app.get("/liveloconmap", response_class=HTMLResponse)
async def load_live_location_map(request: Request):
    return templates.TemplateResponse("liveloconmap.html", {"request": request})

# Route for findlocationonmap.html
@app.get("/findlocationonmap", response_class=HTMLResponse)
async def load_find_location_map(request: Request):
    return templates.TemplateResponse("findlocationonmap.html", {"request": request})

# Access log endpoint
@app.post("/log-access")
async def log_access(request: Request):
    data = await request.json()
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    log_entry = f"[{timestamp}] IP: {request.client.host}, Agent: {data.get('agent')}, Location: {data.get('location')}\n"
    with open("access_log.txt", "a") as f:
        f.write(log_entry)
    return {"status": "logged"}

@app.get("/get-access-logs", response_class=PlainTextResponse)
async def get_access_logs():
    try:
        with open("access_log.txt", "r") as f:
            logs = f.read()
        return logs
    except FileNotFoundError:
        return "No access logs found."


# @app.post("/submit-contact")
# async def submit_contact(
#     name: str = Form(...),
#     email: str = Form(...),
#     message: str = Form(...)
# ):
#     # You can log, store, or email this data
#     print(f"Contact Form Submitted:\nName: {name}\nEmail: {email}\nMessage: {message}")
#     return {"status": "success", "message": "Thank you for contacting us!"}


@app.post("/submit-contact")
async def submit_contact(
    request: Request,
    name: str = Form(...),
    email: str = Form(...),
    message: str = Form(...)
):
    print(f"Contact Form Submitted:\nName: {name}\nEmail: {email}\nMessage: {message}")

    # Redirect to home page after submission
    redirect_url = request.url_for("load_index")  # assuming your home route is named 'load_index'
    return RedirectResponse(url=redirect_url, status_code=status.HTTP_303_SEE_OTHER)


