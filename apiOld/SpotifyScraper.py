import spotipy
from spotipy.oauth2 import SpotifyOAuth
from googleapiclient.discovery import build
import config
import os

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=config.spotifyClientID,
                                               client_secret=config.spotifyClientSecret,
                                               redirect_uri="http://localhost:9000",
                                               scope="user-read-recently-played"))


def getVideoID(artist, songTitle, API_KEY=config.youtubeAPI, searchTerm="audio only"):
    # Checking If Song Data Already in Database
    #doc_ref = firestoreDB.collection("music").document("master")

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


class SpotifyScraper:

    def __init__(self, JSONResponse):
        """
            {
              "Title" : "Playlist1",
              "Link" : "https://spotifyLink",
              "Image" : "some link"
              "Songs" : [
                {
                  "title" : "Hot Line Bling",
                  "artist" : "Drake",
                  "youtubeLink" : ""
                  "path" : ""
                  "image" : ""
                },
              ],
            }
        """
        self.JSONResponse = JSONResponse
        self.songs = []

    def getSpotifyData(self):
        print(self.JSONResponse)

        for song in self.JSONResponse["tracks"]["items"]:
            self.songs.append({
                "title": song["track"]["name"],
                "artist": song["track"]["artists"][0]["name"],
                "youtubeLink": getVideoID(song["track"]["artists"][0]["name"], song["track"]["name"]),
                "image": song["track"]["album"]["images"][0]["url"],
                "filename": f'{song["track"]["name"]} - {song["track"]["artists"][0]["name"]}.mp3'
            })

        return self.songs
