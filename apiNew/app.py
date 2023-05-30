from apiKeys import *
import spotipy
from spotipy.oauth2 import SpotifyOAuth
import os

from flask import Flask, request, send_file, Response, render_template, url_for, redirect, jsonify
# from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base


""" 
    DEFAULT FLASK BOILERPLATE + TESTING HOMEPAGE 
"""
app = Flask(__name__)
# CORS(app)
api = Api(app)

Base = declarative_base()
BASEDIR = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(BASEDIR, 'songDatabase.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

""" 
    Defining Five (5) Primary Resources:
        - Song
        - Playlist
        - Artist
        - PlaylistSongs
        - ArtistSongs 
"""


class Song(db.Model):
    __tablename__ = "song"
    id = db.Column(db.String(22), primary_key=True)
    title = db.Column(db.String(100))
    artistID = db.Column(db.String(22))
    imageLink = db.Column(db.String(2048))
    youtubeLink = db.Column(db.String(2048), unique=True)
    addedAt = created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    duration = db.column(db.Integer)
    song = db.column(db.LargeBinary, nullable=False)

class Playlist(db.Model):
    __tablename__ = "playlist"
    id = db.Column(db.String(22), primary_key=True)
    title = db.Column(db.String(100))
    owner = db.Column(db.String(100))
    imageLink = db.Column(db.String(2048))


class Artist(db.Model):
    __tablename__ = "artist"
    id = db.Column(db.String(22), primary_key=True)
    name = db.Column(db.String(100))
    imageLink = db.Column(db.String(2048))


class PlaylistSongs(db.Model):
    __tablename__ = "playlistSongs"
    playlistID =
    songID =
    location =


class ArtistSongs(db.Model):
    __tablename__ = "artistSongs"
    artistID =
    songID =
    playlistID =
    __table_args__ = (
        db.PrimaryKeyContraint("artistID", "songID", "playlistID")
    )


db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
