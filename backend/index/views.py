from flask import render_template

from . import index
from ..models import Promocoes, db

@index.route("/", methods=["GET"])
def home():
    return render_template("index/index.html")