from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, Column, String, DateTime, Integer, LargeBinary, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import declarative_base, sessionmaker
import os

"""  DEFAULT SQL-ALCHEMY BOILERPLATE """
BASE_DIR = os.path.dirname(os.path.realpath(__file__))
connection_string = "sqlite:///" + os.path.join(BASE_DIR, 'spotifyBot.db')
Base = declarative_base()
engine = create_engine(connection_string, echo=True)
Session = sessionmaker()

"""  DEFINING PRIMARY RESOURCES/TABLES """


class SongDB(Base):
    __tablename__ = "songs"
    id = Column(String(22), primary_key=True)
    title = Column(String(50), nullable=False)
    playlistID = relationship("PlaylistDB", backref="SongDB")
    artistID = relationship("ArtistDB", backref="SongDB")

    imageLink = Column(String(200))
    youtubeLink = Column(String(200), unique=True, nullable=False)
    addedAt = Column(DateTime(timezone=True), server_default=func.now())
    duration = Column(Integer())
    song = Column(LargeBinary(), nullable=False)

    def __repr__(self):
        return f"Song(id='{self.id}', title='{self.title}', artistID='{self.artistID}', imageLink='{self.imageLink}', " \
               f"youtubeLink='{self.youtubeLink}', addedAt='{self.addedAt}', duration='{self.duration}', " \
               f"song='[Binary Data]') "


class PlaylistDB(Base):
    __tablename__ = "playlists"
    id = Column(String(22), ForeignKey("SongDB.id"), primary_key=True)
    title = Column(String(50))
    owner = Column(String(50))
    imageLink = Column(String(200))

    def __repr__(self):
        return f"Playlist(id='{self.id}', title='{self.title}', owner='{self.owner}', imageLink='{self.imageLink}')"


class ArtistDB(Base):
    __tablename__ = "artists"
    id = Column(String(22), ForeignKey("SongDB.id"), primary_key=True)
    name = Column(String(100))
    imageLink = Column(String(200))

    def __repr__(self):
        return f"Artist(id='{self.id}', name='{self.name}', imageLink='{self.imageLink}')"


if __name__ == "__main__":
    Base.metadata.create_all(engine)
