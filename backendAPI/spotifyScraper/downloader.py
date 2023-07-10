from spotipy.oauth2 import SpotifyOAuth
import spotipy
import config

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=config.spotifyClientID,
                                               client_secret=config.spotifyClientSecret,
                                               redirect_uri="http://localhost:9000",
                                               scope="user-read-recently-played"))
playlistID = "https://open.spotify.com/playlist/37i9dQZF1E35OBrAbt4s3Z"
JSONResponse = sp.playlist(playlistID)
print(JSONResponse)