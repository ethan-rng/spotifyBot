import spotipy
from spotipy.oauth2 import SpotifyOAuth
import config

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=config.spotifyClientID,
                                               client_secret=config.spotifyClientSecret,
                                               redirect_uri="http://localhost:9000",
                                               scope="user-read-recently-played"))


class SpotifyScraper:
    def __init__(self, playlistID):
        self.playlistID = playlistID
        self.playlistData = None
        self.songData = []  # [(artistName1, songTitle1), (artistName2, songTitle2), (artistName2, songTitle2)]

    def getPlaylistData(self):
        JSONResponse = sp.playlist(self.playlistID)
        print(JSONResponse)

        """ 
        PLAYLIST
            ID
            title
            owner
            imageLink        
        """



        """
        SONGS
            ID -> PK
            title ->
            playlistID ->
        """




