from flask import Flask
from flask_restful import Api
from flask_restful import Resource
from sqlalchemy import text
from api.spotifyScraper.database import SongDB, PlaylistDB, ArtistDB, Session
from api.spotifyScraper import spotifyScraper as Scaper

""" TESTER HOME PAGE + BOILERPLATE """
app = Flask(__name__)
api = Api(app)

@app.route("/")
def home():
    return {"message": "connection working"}


""" DEFINING API RESOURCES """
class Song(Resource):
    def get(self, songID):
        if len(songID) != 22:
            return {"message": "Not a valid songID"}, 400
        responseJSON = {}

        SongDB.query("SELECT * ")


        return responseJSON

    def delete(self, songID):
        pass


class Playlist(Resource):
    def get(self, playlistID):
        # CHECKING IF VALID ID
        if len(playlistID) != 22:
            return {"message": "Not a valid playlistID"}, 400
        responseJSON = {}

        PlaylistDB.query("SELECT * FROM ")
        return responseJSON, 200

    def post(self, playlistID):
        # CHECKING IF VALID ID OR ALREADY EXIST
        if len(playlistID) != 22:
            return {"message": "Not a valid playlistID"}, 400

        # DATA SCRAPING
        webScraper = Scaper(playlistID)
        playlistObj = webScraper.getPlaylistData()


        return {"message": "posted successfully"}, 200


class Artist(Resource):
    def get(self, artistID):
        if len(artistID) != 22:
            return {"message": "Not a valid playlistID"}, 400
        responseJSON = {}

        # SQL LOOKUP
        result = Session.execute(text("SELECT * FROM artists WHERE id = '2222222222222222222222';")).fetchall()
        print("result: " + str(result))
        responseJSON["message"] = str(result)
        return responseJSON, 200

    def delete(self, artistID):
        pass

    def post(self, artistID):
        Session.add(ArtistDB(artistID, "boi", "dope"))
        db.session.commit()


api.add_resource(Song, "/song/<string:songID>")
api.add_resource(Playlist, "/playlist/<string:playlistID>")
api.add_resource(Artist, "/artist/<string:artistID>")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
