from apiKeys import *
import spotipy
from spotipy.oauth2 import SpotifyOAuth

from flask import Flask, request, send_file, Response, render_template
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
from flask_sqlalchemy import SQLAlchemy

# from SpotifyScraper import SpotifyScraper

# FLASK API Boilerplate
app = Flask(__name__)
CORS(app)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

# TESTING HOMEPAGE FOR CONNECTING
@app.route("/")
def home():
    return render_template("index.html")

class Song(Resource):
    pass

class 
