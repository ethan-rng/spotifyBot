import pickle
import firebase_admin
from firebase_admin import firestore, credentials
from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse

# $ pip install --upgrade firebase-admin ipython
# $ pip install --upgrade google-api-python-client

# FLASK API
app = Flask(__name__)
CORS(app)
api = Api(app)

# FIRESTORE DATA-BASE
cred = credentials.Certificate("config.json")
firestoreApp = firebase_admin.initialize_app(cred)
firestoreDB = firestore.client()


@app.route("/")
def home():
    return "Test Worked, Successful Connected to Jankify API"


# PLAYLIST RESOURCE
class Playlist(Resource):
    db = firestoreDB.collection("playlists")

    def get(self, playlistID):
        # Connect to Firebase to Retrieve Data
        doc_ref = Playlist.db.document(playlistID)

        if doc_ref.get().exists:
            print("Return: " + doc_ref.get().to_dict())
            return doc_ref.get().to_dict()

        return {"returnCode": 404}, 404

    def post(self, playlistID):
        # Checks to See if playlist already exists
        doc_ref = Playlist.db.document(playlistID)
        if doc_ref.get().exists: return {"returnCode", 401}, 401

        # Connecting to Spotify API
        .set({"id":playlistID})

        return


# Playlist OBJECT
playlist_put_args = reqparse.RequestParser()
playlist_put_args.add_argument("youtubeLink", type=str, help="please insert a link", required=True)
playlist_put_args.add_argument("artist", type=str, help="please insert a link")
playlist_put_args.add_argument("link", type=str, help="please insert a link")


# PLAYLIST SONG
class Song(Resource):
    pass


# PLAYLIST USER
class User(Resource):
    def get(self):
        pass

    def post(self):
        pass


# ADDING RESOURCES TO API ENDPOINTS
api.add_resource(Playlist, "/playlist/<string:playlistID>/")
api.add_resource(Song, "/song/")
api.add_resource(User, "/user/<string:userID>/")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
