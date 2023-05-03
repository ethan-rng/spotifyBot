import json
import os


class Song:
    def __init__(self, JSONSong, masterPath=f"{os.getcwd()}/music/master/master.json"):
        self.title = JSONSong["title"]
        self.artist = JSONSong["artist"]
        self.youtubeLink = JSONSong["youtubeLink"]
        self.path = JSONSong["path"]
        self.image = JSONSong["image"]

        self.masterPath = masterPath

    def __repr__(self):
        return f"{self.title} {self.artist}"

    def __eq__(self, other):
        if (self.title == other.title and self.artist == other.artist) or (self.youtubeLink == other.youtubeLink):
            return True

        return False

    def getSong(self):
        return {
            "title": self.title,
            "artist": self.artist,
            "youtubeLink": self.youtubeLink,
            "path": self.path,
            "image": self.image
        }

    def getMaster(self, printMaster=False):
        with open(self.masterPath, "r") as masterJSONFile:
            master = json.load(masterJSONFile)

        if printMaster:
            print(master)

        return master

    def checkMaster(self, returnSong=False):
        master = self.getMaster()

        # We do this because not all the things matters
        for song in master["Songs"]:
            if Song(self.getSong()) == Song(song):
                print("True")

                if returnSong:
                    return Song(song)
                else:
                    return True
        return False

    def addSong(self):
        if not self.checkMaster():
            master = self.getMaster()
            master["Songs"].append(self.getSong())

            with open(self.masterPath, 'w') as masterJSONFile:
                json.dump(master, masterJSONFile,
                          indent=4,
                          separators=(',', ': '))
        else:
            print("Song Already Here")

