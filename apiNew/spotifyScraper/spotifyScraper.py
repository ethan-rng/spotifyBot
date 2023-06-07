from . import sp
from ..database import ArtistDB, SongDB, PlaylistDB

class SpotifyScraper:
    def __init__(self, playlistID):
        self.playlistID = playlistID
        self.playlistData = None
        self.songData = []  # [(artistName1, songTitle1), (artistName2, songTitle2), (artistName2, songTitle2)]

    def getPlaylistData(self):
        JSONResponse = sp.playlist(self.playlistID)
        print(JSONResponse)

        title =
        owner =
        imageLink =
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



    def g

