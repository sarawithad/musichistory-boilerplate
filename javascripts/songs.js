console.log("is anyone out there?");


var songList = document.getElementById("putMusicHere");

// Pull in data from JSON file with XHR
var musicRequest = new XMLHttpRequest();
musicRequest.open("GET", "songs1.json");
musicRequest.send();
musicRequest.addEventListener("load", musicRequestComplete);
musicRequest.addEventListener("error", musicRequestFailed);


function musicRequestComplete(event){
    console.log("your json request successfully loaded");
    var data = JSON.parse(event.target.responseText);
    showMusic(data);
};

function musicRequestFailed(event){
    console.log("your json request failed to load")
};

// Loop over results and inject into Music History list view.
function showMusic(data){
    //loop through JSON file to get each song/artist/album to show up on own row
    for (var i = 0; i < data.length; i++) {
        var songData = data[i].song;
        // console.log("data[i].song", data[i].song)
        var artistData = data[i].artist;
        // console.log("data[i].artist", data[i].artist)
        var albumData = data[i].album;
        // console.log("data[i].album", data[i].album);
        songList.innerHTML += `<div id>${songData} | ${artistData} | ${albumData}<button id="delete" type="button">Delete</button></div><br>`;
    }
};


// Take your music and split it into two JSON file instead of them all living on one file.
// Add a button at the bottom of your music list and label it "More >".
// Load the songs from the first list and inject the DOM into the document as you've already done.
// When the user clicks that button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button.

var musicRequest2 = new XMLHttpRequest();
musicRequest2.open("GET", "songs2.json");
musicRequest2.send();
musicRequest2.addEventListener("load", loadSecondMusic);
musicRequest2.addEventListener("error", musicRequestFailed);

function loadSecondMusic(event){
    // console.log("you are now inside the loadMoreMusic function");
    var data2 = JSON.parse(event.currentTarget.responseText);
    var moreMusicBttn = document.getElementById("moreButton");
    // console.log("button work?")
    moreMusicBttn.addEventListener("click", showSecondMusic);
        function showSecondMusic(){
            for (var i = 0; i < data2.length; i++) {
            var songData2 = data2[i].song;
            var artistData2 = data2[i].artist;
            var albumData2 = data2[i].album;
            songList.innerHTML += `<div id>${songData2} | ${artistData2} | ${albumData2}<button id="delete" type="button">Delete</button></div><br>`;
        }

    }
};


// Add delete button DOM to each row and, when it is clicked, delete the entire row in the DOM.
var delBttn = document.getElementById("delete");
songList.addEventListener("click", removeSongRow);

function removeSongRow(event) {
    event.target.parentNode.remove(songList);
    console.log("event.currentTarget", event.currentTarget);
};