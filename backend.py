import os
from moviepy.audio.io.AudioFileClip import AudioFileClip
from pytube import YouTube
from playlist import Playlist

# pip install --upgrade google-api-python-client


class Downloader:
    def __init__(self, playlist):
        self.request = playlist

    def downloadMusic(self):
        for i in range(len(self.request.getPlaylist()["Songs"])):
            song = self.request.getPlaylist()["Songs"][i]
            _song = self.request._getPlaylist()["Songs"][i]

            if not _song.checkMaster():
                # Downloads Musics
                yt = YouTube(_song.getSong()["youtubeLink"])
                video = yt.streams.filter(only_audio=True).first()
                video.download(f"{os.getcwd()}/music/master")
                print(_song.getSong()["artist"] + " " + _song.getSong()["title"])

                # Add Song to master.json
                _song.addSong()

                # Rename File Path and Convert to mp3
                currFilePath = f"{os.getcwd()}/music/master/{yt._title}.mp4"
                newFilePath = f'{os.getcwd()}/music/master/{_song.getSong()["title"]} | {_song.getSong()["artist"]}.mp3'

                clip = AudioFileClip(currFilePath)
                clip.write_audiofile(newFilePath)
                clip.close()

                os.remove(currFilePath)

        # Add Playlist to masterPlaylist
        self.request.addPlaylist()

        # Returns with new data
        return self.request


if __name__ == "__main__":
    p = Playlist("https://open.spotify.com/playlist/1F8BHx4c6QBXiGEuDmhgmP")
    d = Downloader(p)
    d.downloadMusic()