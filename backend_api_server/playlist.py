from song import Song
import spotipy
from spotipy.oauth2 import SpotifyOAuth
from googleapiclient.discovery import build
import config
import json
import os

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=config.sptfy_ID,
                                               client_secret=config.sptfy_API_KEY,
                                               redirect_uri="http://localhost:9000",
                                               scope="user-read-recently-played"))

masterPath = f"{os.getcwd()}/music/master/master.json"


def getVideoID(artist, songTitle, API_KEY=config.yt_API_KEY, searchTerm="audio only"):
    # Checking master first
    with open(masterPath, "r") as masterJSONFile:
        master = json.load(masterJSONFile)

    for song in master["Songs"]:
        if str(Song(song)) == f"{songTitle} {artist}":
            print("adfadf" + song["youtubeLink"])
            return song["youtubeLink"]

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
    def __init__(self, playlistLink):
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
        self.playlistLink = playlistLink
        self.songs = []

    def getSpotifyData(self):
        # music[34: ] returns music ID
        JSONResponse = sp.playlist(self.playlistLink[34:])

        print(JSONResponse)
        for song in JSONResponse["tracks"]["items"]:
            self.songs.append(Song({
                "title": song["track"]["name"],
                "artist": song["track"]["artists"][0]["name"],
                "youtubeLink": getVideoID(song["track"]["artists"][0]["name"], song["track"]["name"]),
                "image": song["track"]["album"]["images"][0]["url"],
                "path": f'{os.getcwd()}/music/master/{song["track"]["name"]} | {song["track"]["artists"][0]["name"]}.mp3'
            }))
        return self.songs, JSONResponse["images"][0]["url"]


class Playlist:
    def __init__(self, link=None, filePath=None):
        if link is None and filePath is None:
            raise Exception("Must Specify link or filePath Param")
        else:
            if link is not None and filePath is None:  # loads from link
                title = sp.playlist(link[34:])["name"]
                songs, image = SpotifyScraper(link).getSpotifyData()

            elif filePath is not None and filePath is None:  # loads from pre-existing JSON File
                self.filePath = filePath
                data = self.getMasterPlaylist()

                title = data["Title"]
                link = data["Link"]
                image = data["ImageLink"]
                songs = data["Songs"]

        self.Title = title
        self.Link = link
        self.Image = image
        self.Songs = songs

    def getPlaylist(self):
        songs = []
        for song in self.Songs:
            songs.append(song.getSong())
        return {
            "Title": self.Title,
            "Link": self.Link,
            "Image": self.Image,
            "Songs": songs,
        }

    def _getPlaylist(self):
        return {
            "Title": self.Title,
            "Link": self.Link,
            "Image": self.Image,
            "Songs": self.Songs
        }

    def getMasterPlaylist(self, printMasterPlaylist=False):
        with open(f"{os.getcwd()}/music/playlist/{self.filePath}") as masterJSONFile:
            masterPlaylist = json.load(masterJSONFile)

        if printMasterPlaylist:
            print(masterPlaylist)

        return masterPlaylist

    def addPlaylist(self):
        json_object = json.dumps(self.getPlaylist(), indent=4)

        # Writing to sample.json
        with open(f"{os.getcwd()}/music/masterPlaylist/{self.Link[34:]}.json", "w") as JSONOutfile:
            JSONOutfile.write(json_object)
