from datetime import datetime

from flask import current_app as app
from flask import make_response, redirect, render_template, request, url_for

from .models import Promocoes, db

@app.route("/", methods=["GET"])
def home():
    render_template("index.html")

@app.route("/promocoes", methods=["POST"])
def promocoes():
    pass