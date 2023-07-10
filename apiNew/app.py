from flask import Flask, Response, send_file, jsonify
from flask_restful import Api
from flask_restful import Resource
from flask_sqlalchemy import SQLAlchemy

from sqlalchemy import text
from database import SongDB, PlaylistDB, ArtistDB
from spotifyScraper import spotifyScraper as scraper
from config import testSong, testMasterSong, testPlaylist, testMasterPlaylist

""" TESTER HOME PAGE + BOILERPLATE """
app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///spotifyBot.db'
db = SQLAlchemy(app)
audio_file_path = 'music/test2.mp3'


@app.route("/")
def home():
    return {"message": "connection working"}


@app.route('/stream_audio')
def stream_audio():
    global audio_file_path  # Replace with the actual path to your MP3 file

    # Specify the mimetype as audio/mpeg or the appropriate mimetype for your audio file
    return send_file(audio_file_path, mimetype='audio/mpeg', as_attachment=False, conditional=True), testMasterSong


# DEFINING API RESOURCES
class Song(Resource):
    def get(self, songID):
        if len(songID) != 22 and songID != "master":
            return {"message": "Not a valid songID"}, 400
        responseJSON = {}

        if songID == "master":
            # Check All The Song
            return testMasterSong
        else:
            # Try to Find One Specific File and Stream It
            # SongDB.query("SELECT * ")
            return Response(
                response=jsonify(testSong).response,
                status=200,
                content_type=jsonify(testSong).content_type,
                headers=send_file("music/test2.mp3", mimetype='audio/mpeg', as_attachment=False, conditional=True).headers
            )

    def delete(self, songID):
        pass


class Playlist(Resource):
    def get(self, playlistID):
        # CHECKING IF VALID ID
        if len(playlistID) != 22 and playlistID != "d":
            return {"message": "Not a valid playlistID"}, 400
        responseJSON = {}

        if playlistID == "d":
            global audio_file_path
            audio_file_path = "music/test3.mp3"
            return testMasterPlaylist
        else:
            return testPlaylist

        PlaylistDB.query("SELECT * FROM ")
        return responseJSON, 200

    def post(self, playlistID):
        # CHECKING IF VALID ID OR ALREADY EXIST
        if len(playlistID) != 22:
            return {"message": "Not a valid playlistID"}, 400
        elif PlaylistDB.query.get_or_404(playlistID) != 404:
            return {"message": "Resource already exists"}, 409

        # DATA SCRAPING
        webScraper = scraper(playlistID)
        playlistObj = webScraper.getPlaylistData()
        songs = []
        artists = []

        # POSTING TO SQL DATABASE
        db.session.add(playlistObj)
        for songObj in songs:
            db.session.add(songObj)
        for artistObj in artists:
            db.session.add()

        db.session.commit()

        return {"message": "posted successfully"}, 200


class Artist(Resource):
    def get(self, artistID):
        if len(artistID) != 22:
            return {"message": "Not a valid playlistID"}, 400
        responseJSON = {}

        # SQL LOOKUP
        result = db.session.execute(text("SELECT * FROM artists WHERE id = '2222222222222222222222';")).fetchall()
        print("result: " + str(result))
        responseJSON["message"] = str(result)
        return responseJSON, 200

    def delete(self, artistID):
        pass

    def post(self, artistID):
        db.session.add(ArtistDB(artistID, "boi", "dope"))
        db.session.commit()


api.add_resource(Song, "/song/<string:songID>")
api.add_resource(Playlist, "/playlist/<string:playlistID>")
api.add_resource(Artist, "/artist/<string:artistID>")

app.run(host="0.0.0.0", port=3000)
