from flask import Blueprint

produtos = Blueprint('produtos', __name__)

from . import views