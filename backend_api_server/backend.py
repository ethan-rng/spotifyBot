import os
from moviepy.audio.io.AudioFileClip import AudioFileClip
from pytube import YouTube
from playlist import Playlist

# pip install --upgrade google-api-python-client


class Downloader:
    def __init__(self, playlist):
        self.request = playlist

    def downloadMusic(self):
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

        for i in range(len(self.request.getPlaylist()["Songs"])):
            _song = self.request._getPlaylist()["Songs"][i]

            if not _song.checkMaster():
                # Rename File Path
                currFilePath = f'{os.getcwd()}/static/{_song.getSong()["title"]} | {_song.getSong()["artist"]}.mp4'
                newFilePath = currFilePath[:-4] + ".mp3"

                # Downloads Musics
                yt = YouTube(_song.getSong()["youtubeLink"])
                video = yt.streams.filter(only_audio=True).first()
                video.download(f"{os.getcwd()}/static", filename=currFilePath)

                print(_song.getSong()["artist"] + " " + _song.getSong()["title"])

                # Add Song to master.json
                _song.addSong()

                # Converts to mp3
                clip = AudioFileClip(currFilePath)
                clip.write_audiofile(newFilePath)
                clip.close()

                os.remove(currFilePath)

        # Add Playlist to masterPlaylist
        self.request.addPlaylist()

        # Returns with new data
        return self.request


if __name__ == "__main__":
    link = "https://open.spotify.com/playlist/0fRhitJjcYcGu5FkZs5sa2"
    p = Playlist(link)
    d = Downloader(p)
    d.downloadMusic()