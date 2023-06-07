from flask_restful import Resource
from sqlalchemy import text
from database import SongDB, PlaylistDB, ArtistDB, app, api, db
from spotifyScraper import spotifyScraper as scaper

""" TESTER HOME PAGE"""


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
        elif PlaylistDB.query.get_or_404(playlistID) != 404:
            return {"message": "Resource already exists"}, 409

        # DATA SCRAPING
        webScraper = scaper(playlistID)
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

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
