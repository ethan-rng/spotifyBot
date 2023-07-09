from sqlalchemy import create_engine, Column, String, DateTime, Integer, LargeBinary, ForeignKey, PrimaryKeyConstraint
from sqlalchemy.sql import func
from sqlalchemy.orm import declarative_base, sessionmaker, relationship
import os

"""  DEFAULT SQL-ALCHEMY BOILERPLATE """
BASE_DIR = os.path.dirname(os.path.realpath(__file__))
connection_string = "sqlite:///" + os.path.join(BASE_DIR, '../../spotifyBot.db')
Base = declarative_base()
engine = create_engine(connection_string)
Session = sessionmaker(bind=engine)

# For Logging Purposes
MAGENTA = "\033[35m"
RESET = "\033[0m"

"""  DEFINING PRIMARY RESOURCES/TABLES """


class SongDB(Base):
    __tablename__ = "songs"
    id = Column(String(22), primary_key=True)
    title = Column(String(50), nullable=False)
    discNumber = Column(Integer(), primary_key=True)

    playlistID = Column(String(22), ForeignKey("playlists.id"), primary_key=True)
    playlist = relationship("PlaylistDB", back_populates="songs")
    artistID = Column(String(22), ForeignKey("artists.id"))
    artist = relationship("ArtistDB", back_populates="songs")

    imageLink = Column(String(200))
    youtubeLink = Column(String(200), unique=True, nullable=False)
    addedAt = Column(DateTime(timezone=True), server_default=func.now())
    duration = Column(Integer())

    songID = Column(Integer(), ForeignKey("songFiles.id"))
    songFile = relationship("FileDB", back_populates="songs")

    # Defining Composite Key
    __table_args__ = (
        PrimaryKeyConstraint("id", "discNumber", "playlistID"), {}
    )

    def __repr__(self):
        return f"Song(id={MAGENTA}'{self.id}'{RESET}, title={MAGENTA}'{self.title}'{RESET}, artistID={MAGENTA}'" \
               f"{self.artistID}'{RESET}, imageLink={MAGENTA}'{self.imageLink}'{RESET}, " \
               f"youtubeLink={MAGENTA}'{self.youtubeLink}'{RESET}, addedAt={MAGENTA}'{self.addedAt}'{RESET}, " \
               f"duration={MAGENTA}'{self.duration}'{RESET}, " \
               f"song='{MAGENTA}[Binary Data]{RESET}')"


class PlaylistDB(Base):
    __tablename__ = "playlists"
    id = Column(String(22), primary_key=True)
    title = Column(String(50))
    owner = Column(String(50))
    ownerLink = Column(String(200))
    imageLink = Column(String(200))

    songs = relationship("SongDB", back_populates="playlist")

    def __repr__(self):
        return f"Playlist({MAGENTA}id={RESET}'{self.id}', {MAGENTA}title{RESET}='{self.title}', {MAGENTA}owner{RESET}=" \
               f"'{self.owner}', {MAGENTA}imageLink{RESET}='{self.imageLink}') "


class ArtistDB(Base):
    __tablename__ = "artists"
    id = Column(String(22), primary_key=True)
    name = Column(String(100))
    imageLink = Column(String(200))

    songs = relationship("SongDB", back_populates="artist")

    def __repr__(self):
        return f"Artist('{MAGENTA}id{RESET}'='{self.id}', '{MAGENTA}name{RESET}'='{self.name}', " \
               f"'{MAGENTA}imageLink{RESET}'='{self.imageLink}')"


class FileDB(Base):
    __tablename__ = "songFiles"
    id = Column(Integer(), primary_key=True, autoincrement=True)
    file = Column(LargeBinary(), unique=True, nullable=False)

    songs = relationship("SongDB", back_populates="songFile")


if __name__ == "__main__":
    Base.metadata.create_all(engine)
