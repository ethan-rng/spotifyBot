import spotipy
from spotipy.oauth2 import SpotifyOAuth
import config
import sqlite3


class SpotifyScraper:
    def __init__(self, playlistID):
        self.playlistID = playlistID
        self.playlistJSON = None
        self.songJSON = None
        self.artistJSON = None

        self.sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=config.spotifyClientID,
                                                       client_secret=config.spotifyClientSecret,
                                                       redirect_uri="http://localhost:9000",
                                                       scope="user-read-recently-played"))
        self.cursor = sqlite3.connect('../spotifyBot.db').cursor()

    def getPlaylistData(self):
        JSONResponse = self.sp.playlist(self.playlistID)

        # Create/Update New Playlist Entry
        playlistID = JSONResponse.get("id")
        playlistTitle = JSONResponse.get("name")
        playlistOwner = JSONResponse.get("owner", {}).get("id")
        playlistImageLink = JSONResponse.get("images", [])[0]

        self.cursor.execute("""
            INSERT OR REPLACE INTO Users (id, title, owner, imageLink)
            VALUES (?, ?, ?, ?)
        """, (playlistID, playlistTitle, playlistOwner, playlistImageLink))

        # Create/Update Artists and Songs
        for song in JSONResponse["tracks"]["items"]:
            # Artist Data
            artistID = song.get("track")
            artistName = song
            imageLink = song

            # Song Data
            songID = song
            songTitle =
            imageLink =
            youtubeLink = self.getYoutubeLink()
            addedAt = song.get("added_at")
            durationMs, songBlob

    def getYoutubeLink(self):
        pass

    def downloadSong(self, download=False):
        pass

if __name__ == "__main__":
    ID = ["7fq6aJCdqNd6MI5Dd4D3QL", "06P0Mmp6g8Zzi4QgqXuBik"]
    s = SpotifyScraper(ID[0])
    print(s.getPlaylistData())
    print(s.getArtistData("2o8gT0fQmFxGNbowbdgeZe"))

