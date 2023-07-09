import spotipy
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm.exc import NoResultFound
from spotipy.oauth2 import SpotifyOAuth
from backendAPI.spotifyScraper import config
from database import Session, PlaylistDB, ArtistDB, SongDB
from googleapiclient.discovery import build


""" GLOBAL VARIABLES"""
sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=config.spotifyClientID,
                                               client_secret=config.spotifyClientSecret,
                                               redirect_uri="http://localhost:9000",
                                               scope="user-read-recently-played"))
local_session = Session()


""" DEFINING HELPER FUNCTIONS """
def checkIfExist(resource, id, playlistID=None):
    try:
        if playlistID is None:
            returnItem = local_session.query(resource).filter_by(id=id).one()
        else:
            returnItem = local_session.query(resource).filter_by(id=id, playlistID=playlistID).one()
        print(f"Item Found in DB with id: {id}")
        return returnItem
    except NoResultFound:
        print(f"Item Not Found in DB with id: {id}")
        return False


def getVideoID(songID, artist, songTitle, API_KEY=config.yt_API_KEY, searchTerm="audio only"):
    # Making Call to YouTube API
    with build("youtube", "v3", developerKey=API_KEY) as service:
        req = service.search().list(
            part="snippet",
            q=f"{artist} {songTitle} {searchTerm}",
            type="video",
        )
        response = req.execute()

    for i in range(len(response["items"])):
        videoData = response["items"][i]
        video = videoData["snippet"]
        title = video["title"].lower()

        # Search for unwanted results
        if "instrumental" not in title:
            return f'https://www.youtube.com/watch?v={response["items"][i]["id"]["videoId"]}'


""" DEFINING SPOTIFYSCRAPER CLASS """
class SpotifyScraper:
    def __init__(self, playlistID):
        self.playlistID = playlistID
        self.JSONResponse = sp.playlist(self.playlistID)
        self.songObj = []

        # Defines Whether This Is A New Playlist
        dbItem = checkIfExist(PlaylistDB, self.playlistID)
        if dbItem:
            self.playlistObj = dbItem
            self.exist = True
        else:
            self.playlistObj = None
            self.exist = False

    def getPlaylistData(self, commit=True):
        print("\033[31mPlaylist ID: " + self.playlistID + "\033[0m")

        if self.exist:  # Pulling From Existing DB Objects
            print("\t" + str(self.playlistObj))
            return self.playlistObj, 409

        else:   # Creating New DB Object and Adding It to DB
            self.playlistObj = PlaylistDB(
                id=self.playlistID,
                title=self.JSONResponse["name"],
                owner=self.JSONResponse["owner"]["display_name"],
                ownerLink=self.JSONResponse["owner"]["external_urls"]["spotify"],
                imageLink=self.JSONResponse["images"][0]["url"]
            )
            print(self.playlistObj)

            if commit:  # Committing to DB
                local_session.add(self.playlistObj)
                local_session.commit()
                print("Added Successfully to DB")

            return self.playlistObj, 400

    def getSongData(self, commit=True, download=True):  # To be used after getPlaylistData()
        self.exist = False
        if self.exist:

            pass
        else:
            for song in self.JSONResponse["tracks"]["items"]:
                print(f"\033[31mSong ID: {song['track']['id']} | {song['track']['name']} By: {song['track']['artists'][0]['name']}\033[0m")
                print(sp.artist(song['track']['artists'][0]['id']))
                artist = checkIfExist(ArtistDB, song["track"]["artists"][0]["id"])
                if artist:  #
                    pass
                else:   # Create New Artist
                    artistObj = ArtistDB(
                        id=song['track']['artists'][0]['id'],
                        name=song['track']['artists'][0]['name'],
                        imageLink=sp.artist(song['track']['artists'][0]['id'])
                    )
                print(artist)


                if commit:
                    pass
                print("\n")

if __name__ == "__main__":
    s = SpotifyScraper("7GvYHdhlFMTQvwrJTxZRHv")
    s.getPlaylistData()
    s.getSongData()

local_session.close()
