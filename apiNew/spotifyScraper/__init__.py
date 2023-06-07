import spotipy
from spotipy.oauth2 import SpotifyOAuth
import config

sp = spotipy.Spotify(auth_manager=SpotifyOAuth(client_id=config.spotifyClientID,
                                               client_secret=config.spotifyClientSecret,
                                               redirect_uri="http://localhost:9000",
                                               scope="user-read-recently-played"))

