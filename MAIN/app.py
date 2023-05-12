import spotipy
from flask import Flask, request, send_file, Response
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
import firebase_admin
from firebase_admin import firestore, credentials
from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
from spotipy.oauth2 import SpotifyOAuth
import config
from SpotifyScraper import SpotifyScraper

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
    return "Test Worked, Successful Connected to Jankify Backend API"


# PLAYLIST RESOURCE
class Playlist(Resource):
    db = firestoreDB.collection("playlists")

    def get(self, playlistID):
        # Connect to Firebase to Retrieve Data
        doc_ref = Playlist.db.document(playlistID).collection("sfdgs")

        if doc_ref.get().exists:
            print("Return: " + str(doc_ref.get().to_dict()))
            return doc_ref.get().to_dict()

        return {"returnCode": 404}, 404

    def post(self, playlistID):
        # Checks to See if playlist already added
        doc_ref = Playlist.db.document(playlistID)
        if doc_ref.get().exists: return {"returnCode": 401}, 401

        # Connecting to Spotify API
        sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=config.spotifyClientID,
                                                       client_secret=config.spotifyClientSecret,
                                                       redirect_uri="http://localhost:9000",
                                                       scope="user-read-recently-played"))
        JSONResponse = sp.playlist(playlistID)
        print(JSONResponse)
        # Filtering Spotify API Response and Upload to Firestore
        """
        uri => 
        {
            "title" : "Playlist1",
            "image" : "some link"
            "songs" : [
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
        dbPackage = {
            "title": JSONResponse["name"],
            "link": [],
            "image": JSONResponse["images"][0]["url"],
            #"songs": SpotifyScraper(JSONResponse)
        }




        print(dbPackage)

        return dbPackage, 201


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


@app.route("/")
def base():
    return "hello World"


@app.route("/test")
def stream():
    def generate():
        with open("test.mp3", "rb") as file:
            data = file.read(1024)
            while data:
                yield data
                data = file.read(1024)

    return Response(generate(), mimetype="audio/mpeg")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
