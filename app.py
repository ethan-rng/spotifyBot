from flask import Flask, render_template, send_file
import os
import json

app = Flask(__name__)

masterFilePath = f"{os.getcwd()}/music"


@app.route("/")
def home():
    with open(f"{masterFilePath}/master/master.json") as masterFile:
        master = json.load(masterFile)
    return render_template("home.html", master=master)


@app.route("/playlist")
def playlist():
    masterPlaylist = []

    for playlistID in os.listdir(f"{masterFilePath}/masterPlaylist"):
        if playlistID != ".DS_Store":
            with open(f"{masterFilePath}/masterPlaylist/{playlistID}") as playlist:
                JSONPlaylist = json.load(playlist)
                masterPlaylist.append(JSONPlaylist)

    return render_template("playlists.html", masterPlaylist=masterPlaylist)


@app.route("/<playlistID>")
def playlistID(playlistID):
    try:
        with open(f"{os.getcwd()}/music/masterPlaylist/{playlistID}.json") as JSONPlaylistFile:
            playlist = json.load(JSONPlaylistFile)

    except FileNotFoundError:
        return render_template("error.html")

    print(playlist["Songs"])
    return render_template("soloPlaylist.html", playlist=playlist)


@app.route("/addPlaylist")
def addPlaylist():
    return render_template("addPlaylist.html")


if __name__ == "__main__":
    app.run(host="localhost", port=8080, debug=True)
