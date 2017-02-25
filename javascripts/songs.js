"use strict";

$(document).ready(function() {


function buildMusic(songsToList) {
    for (var i = 0; i < songsToList.songs.length; i++) {
        var currentSongChosen = songsToList.songs[i];
        $("#putMusicHere").append("<div id='singleSong'>" + "<h4>"+ currentSongChosen.song +"</h4>" + "<div>by " + currentSongChosen.artist + " on the album " + currentSongChosen.album + "<input type='button' class='deleteBttn' value='delete'/>" + "</div>" + "</div>");
        }

        $(".deleteBttn").click( () => {
        console.log("hello");
        $("#singleSong").remove();
        });

    }

$.ajax({
    url:"javascripts/songs.json"
})
.done(buildMusic);


});  

