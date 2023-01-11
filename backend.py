import os
import spotipy
from spotipy.oauth2 import SpotifyOAuth
import config
from pytube import YouTube
from googleapiclient.discovery import build
import json

# pip install --upgrade google-api-python-client

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=config.sptfy_ID, client_secret=config.sptfy_API_KEY,
                                               redirect_uri="http://localhost:9000", scope="user-read-recently-played"))


def getVideoID(artist, song, API_KEY=config.yt_API_KEY, searchTerm="audio only"):
    # Making Call to YouTube API
    with build("youtube", "v3", developerKey=API_KEY) as service:
        req = service.search().list(
            part="snippet",
            q=f"{artist} {song} {searchTerm}",
            type="video",
        )
        response = req.execute()
    print(response)
    return f'https://www.youtube.com/watch?v={response["items"][0]["id"]["videoId"]}'


class Download:
    def __init__(self):
        pass


class SpotifyScraper:
    def __init__(self, playlistLink):
        """
            {
              "Title" : "Playlist1",
              "Link" : "https://spotifyLink",
              "Songs" : [
                {
                  "title" : "Hot Line Bling",
                  "artist" : "Drake",
                  "youtubeLink" : ""
                },
                {
                  "title" : "Hot Line Bling",
                  "artist" : "Drake",
                  "youtubeLink" : ""
                }
              ],
            }
        """
        self.playlistLink = playlistLink
        self.songs = []

    def getSpotifyData(self):
        # playlist[34: ] returns playlist ID
        JSONResponse = sp.playlist(self.playlistLink[34:])
        for song in JSONResponse["tracks"]["items"]:
            self.songs.append({
                "title": song["track"]["name"],
                "artist": song["track"]["artists"][0]["name"],
                "youtubeLink": getVideoID(song["track"]["artists"][0]["name"], song["track"]["name"])
            })

        return self.songs


class Downloader:
    def __init__(self, playlist):
        self.request = playlist.JSONObject

    def downloadMusic(self):
        for song in self.request["Songs"]:
            yt = YouTube(song["youtubeLink"])
            video = yt.streams.filter(only_audio=True).first()
            video.download(f"{os.getcwd()}/playlist")
            print(song["artist"] + " " + song["title"])


class Playlist:
    def __init__(self, link=None, filePath=None):
        if link is not None:  # loads from link
            title = sp.playlist(link[34:])["name"]
            songs = SpotifyScraper(link).getSpotifyData()

        elif filePath is not None:  # loads from pre-existing JSON File
            with open(f"{os.getcwd()}/playlist/{filePath}") as file:
                data = json.load(file)

            title = data["Title"]
            link = data["Link"]
            songs = data["Songs"]

        self.JSONObject = {
            "Title": title,
            "Link": link,
            "Path": filePath,
            "Songs": songs,
        }

        Downloader(self).downloadMusic()

    def saveJSONFile(self):
        pass


if __name__ == "__main__":
    p = Playlist("https://open.spotify.com/playlist/5QwFq7iyLNBgcwxbhNOORE")
    print(p.JSONObject)
