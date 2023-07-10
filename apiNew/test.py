import sqlite3

conn = sqlite3.connect('spotifyBot.db')
cursor = conn.cursor()

cursor.execute('INSERT ')
cursor.execute('SELECT * FROM songs')
rows = cursor.fetchall()

for row in rows:
    print(row)

conn.close()
