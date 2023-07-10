import sqlite3

if __name__ == "__main__":
    conn = sqlite3.connect("spotifyBot.db")
    c = conn.cursor()

    # Creating Databases If They Don't Exist
    c.execute(  # Artist DB
        """
        CREATE TABLE IF NOT EXISTS artists(
            id TEXT NOT NULL PRIMARY KEY,
            name TEXT NOT NULL,
            imageLink TEXT            
        )
        """
    )
    c.execute(  # Playlist DB
        """
        CREATE TABLE IF NOT EXISTS playlists(
            id TEXT NOT NULL PRIMARY KEY,
            title TEXT NOT NULL,
            owner TEXT,
            imageLink TEXT
        )
        """
    )
    c.execute(  # Song DB
        """
        CREATE TABLE IF NOT EXISTS songs (
            id TEXT NOT NULL PRIMARY KEY,
            title TEXT NOT NULL,
            playlistID TEXT NOT NULL,
            artistID TEXT NOT NULL,
            imageLink TEXT,
            durationMs DATETIME DEFAULT CURRENT_TIMESTAMP,
            songBlob BLOB NOT NULL,

            FOREIGN KEY (playlistID) REFERENCES playlists (id),
            FOREIGN KEY (artistID) REFERENCES artists (id)
        )
        """
    )

    conn.commit()
    conn.close()
