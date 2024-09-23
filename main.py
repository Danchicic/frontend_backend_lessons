import uvicorn
from fastapi import FastAPI, Form
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/")
async def root():
    return FileResponse("templates/index.html")


@app.post("/services")
async def submit_form(name: str = Form(),
                      email: str = Form(),
                      phone: str = Form(),
                      country: str = Form(),
                      date: str = Form(),
                      comment: str = Form(),
                      ):
    return FileResponse("templates/successful.html")


@app.get("/services")
async def services():
    return FileResponse("templates/services.html")


if __name__ == '__main__':
    uvicorn.run(app)
