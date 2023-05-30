-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/rAfZSQ
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


SET XACT_ABORT ON

BEGIN TRANSACTION QUICKDBD

CREATE TABLE [Songs] (
    [ID] varChar(22)  NOT NULL ,
    [Title] varChar(100)  NOT NULL ,
    [Artist] varChar(30)  NOT NULL ,
    [ImageLink] varChar(2048)  NOT NULL ,
    [YoutubeLink] varChar(2048)  NOT NULL ,
    [AddedAt] timestamp  NOT NULL ,
    [Duration] decimal(5)  NOT NULL ,
    [Song] blob  NOT NULL ,
    CONSTRAINT [PK_Songs] PRIMARY KEY CLUSTERED (
        [ID] ASC
    )
)

CREATE TABLE [Playlists] (
    [ID] varChar(22)  NOT NULL ,
    [Title] varChar(100)  NOT NULL ,
    [Owner] varChar(100)  NOT NULL ,
    [SpotifyLink] varChar(2048)  NOT NULL ,
    [ImageLink] varChar(2048)  NOT NULL ,
    CONSTRAINT [PK_Playlists] PRIMARY KEY CLUSTERED (
        [ID] ASC
    ),
    CONSTRAINT [UK_Playlists_SpotifyLink] UNIQUE (
        [SpotifyLink]
    )
)

CREATE TABLE [PlaylistSongs] (
    [PlaylistID] varChar(22)  NOT NULL ,
    [SongID] varChar(22)  NOT NULL ,
    [LocationInTrack] int  NOT NULL ,

    CONSTRAINT [UK_PlaylistSongs_LocationInTrack] UNIQUE (
        [LocationInTrack]
    )
)

CREATE TABLE [Artist] (
    [ID] varChar(100)  NOT NULL ,
    [Name] varChar(100)  NOT NULL ,
    [ImageLink] varChar(2048)  NOT NULL ,
    [SpotifyLink] varChar(2048)  NOT NULL ,
    CONSTRAINT [PK_Artist] PRIMARY KEY CLUSTERED (
        [ID] ASC
    ),
    CONSTRAINT [UK_Artist_SpotifyLink] UNIQUE (
        [SpotifyLink]
    )
)

CREATE TABLE [ArtistSongs] (
    [ArtistID] varChar(22)  NOT NULL ,
    [SongID] varChar(22)  NOT NULL ,
    [PlaylistID] varChar(22)  NOT NULL 
)

ALTER TABLE [PlaylistSongs] WITH CHECK ADD CONSTRAINT [FK_PlaylistSongs_PlaylistID] FOREIGN KEY([PlaylistID])
REFERENCES [Playlists] ([ID])

ALTER TABLE [PlaylistSongs] CHECK CONSTRAINT [FK_PlaylistSongs_PlaylistID]

ALTER TABLE [PlaylistSongs] WITH CHECK ADD CONSTRAINT [FK_PlaylistSongs_SongID] FOREIGN KEY([SongID])
REFERENCES [Songs] ([ID])

ALTER TABLE [PlaylistSongs] CHECK CONSTRAINT [FK_PlaylistSongs_SongID]

ALTER TABLE [ArtistSongs] WITH CHECK ADD CONSTRAINT [FK_ArtistSongs_ArtistID] FOREIGN KEY([ArtistID])
REFERENCES [Artist] ([ID])

ALTER TABLE [ArtistSongs] CHECK CONSTRAINT [FK_ArtistSongs_ArtistID]

ALTER TABLE [ArtistSongs] WITH CHECK ADD CONSTRAINT [FK_ArtistSongs_SongID] FOREIGN KEY([SongID])
REFERENCES [Songs] ([ID])

ALTER TABLE [ArtistSongs] CHECK CONSTRAINT [FK_ArtistSongs_SongID]

ALTER TABLE [ArtistSongs] WITH CHECK ADD CONSTRAINT [FK_ArtistSongs_PlaylistID] FOREIGN KEY([PlaylistID])
REFERENCES [Playlists] ([ID])

ALTER TABLE [ArtistSongs] CHECK CONSTRAINT [FK_ArtistSongs_PlaylistID]

COMMIT TRANSACTION QUICKDBD