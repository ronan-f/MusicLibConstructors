const MusicLibrary = function(name, creator) {
    if(name && creator){
        this.name = name;
        this.creator = creator;
        this.playlistsArray = [];
    } else {
        console.log('Cant create library.')
    }
}

MusicLibrary.prototype.addPlaylist = function(playlist) {
    this.playlistsArray.push(playlist);
}

const Playlist = function(name){
    if(!name) {
        console.log('Cant create playlist');
        return;
    }
    this.name = name;
    this.tracks = [];
    this.rating = 0;
    this.duration = 0;
}

Playlist.prototype.addTrack = function(track) {
    this.tracks.push(track);
    this.rating += track.rating;
    this.duration += track.length;
}

Playlist.prototype.avgRating = function() {
    return this.rating / this.tracks.length;
}

Playlist.prototype.avgDuration = function() {
    return this.duration / this.tracks.length;
}

const Track = function(title, rating, length){
    if(title && rating >= 1 && rating <= 5 && length % 1 === 0){
        this.title = title;
        this.rating = rating;
        this.length = length;
    } else {
        console.log('Error cant create track');
    }
}