from apiNew.config import mySQLPassword
from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from sqlalchemy.orm import declarative_base


"""  DEFAULT FLASK BOILERPLATE """
app = Flask(__name__)
api = Api(app)
Base = declarative_base()
# app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db.sqlite3"
app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://root:{mySQLPassword}@localhost/spotifyBotDatabase"
db = SQLAlchemy(app)


"""  DEFINING PRIMARY RESOURCES/TABLES """
class SongDB(db.Model):
    __tablename__ = "songs"
    id = db.Column(db.String(22), primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    playlistID = db.relationship("PlaylistDB", backref="SongDB")
    artistID = db.relationship("ArtistDB", backref="SongDB")

    imageLink = db.Column(db.String(200))
    youtubeLink = db.Column(db.String(200), unique=True, nullable=False)
    addedAt = db.Column(db.DateTime(timezone=True), server_default=func.now())
    duration = db.Column(db.Integer)
    song = db.Column(db.LargeBinary, nullable=False)

    def __init__(self, id, title, artistID, youtubeLink, song, imageLink=None, duration=None):
        self.id = id
        self.title = title
        self.artistID = artistID
        self.youtubeLink = youtubeLink
        self.song = song
        self.imageLink = imageLink
        self.duration = duration

    def __repr__(self):
        return f"Song(id='{self.id}', title='{self.title}', artistID='{self.artistID}', imageLink='{self.imageLink}', " \
               f"youtubeLink='{self.youtubeLink}', addedAt='{self.addedAt}', duration='{self.duration}', " \
               f"song='[Binary Data]') "


class PlaylistDB(db.Model):
    __tablename__ = "playlists"
    id = db.Column(db.String(22), db.ForeignKey("SongDB.id"), primary_key=True)
    title = db.Column(db.String(50))
    owner = db.Column(db.String(50))
    imageLink = db.Column(db.String(200))

    def __init__(self, id, title, owner, imageLink=None):
        self.id = id
        self.title = title
        self.owner = owner
        self.imageLink = imageLink

    def __repr__(self):
        return f"Playlist(id='{self.id}', title='{self.title}', owner='{self.owner}', imageLink='{self.imageLink}')"


class ArtistDB(db.Model):
    __tablename__ = "artists"
    id = db.Column(db.String(22), db.ForeignKey("SongDB.id"), primary_key=True)
    name = db.Column(db.String(100))
    imageLink = db.Column(db.String(200))

    def __init__(self, id, name, imageLink=None):
        self.id = id
        self.name = name
        self.imageLink = imageLink

    def __repr__(self):
        return f"Artist(id='{self.id}', name='{self.name}', imageLink='{self.imageLink}')"
