console.log("hi Dara");

// When the user clicks on "Add Music" in the navigation bar, the List Music View should be hidden, and the Add Music View should be shown.

var addMusicLink = document.getElementById("add-link");
var musicAdd = document.getElementById("addMusicView");

addMusicLink.addEventListener("click", function() {
	viewList.classList.add("hidden");
  	musicAdd.classList.add("visible");
  	musicAdd.classList.remove("hidden");

});


// Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.

//make songs show up in viewList (music view) when click button
var clickToAdd = document.getElementById("addButton");
	clickToAdd.addEventListener("click", clickAddMusic);


function clickAddMusic() {

	//target user inputs 
	var newSong = document.getElementById("addedSong").value;
	var newArtist = document.getElementById("addedArtist").value;
	var newAlbum = document.getElementById("addedAlbum").value;

	//grab song info input by user and add to box of fave songs

	document.getElementById("outputTarget").innerHTML += "<h3>" + newSong + " by " + newArtist + " on the album " + newAlbum + "</h3>";

};


//Abandoned idea below because couldn't get it to work but still wanted to see original thought process

// var musicAdded = [];

// musicAdded.push(`${newSong} / ${newArtist} / ${newAlbum}`)
// console.log("musicAdded", musicAdded)


// var songsAdded = [];
//     function addSongs(potato) {
//         songsAdded.push(potato);
//         console.log("show song array", songsAdded)
//         document.getElementsByClassName("fave").innerHTML = songsAdded.join(" ");

//         for (var i = 0; i < songsAdded.length; i++)
//         var songsTarget = document.getElementById("outputTarget");
//     	songsTarget.innerHTML = `<p>${songsAdded[i]} + "/ " ${artistsAdded[i]} + " /" ${albumsAdded[i]}</p><br>`;


        // var parent = document.getElementById("outputTarget");
        // parent.append(songsAdded);
    // };

// var artistsAdded = [];
// 	function addArtists(artist) {
// 		artistsAdded.push(artist);
// 		document.getElementsByClassName("specs").innerHTML = artistsAdded.join(" ");
// 	}

// var albumsAdded = [];
// 	function addAlbums(album) {
// 		albumsAdded.push(album);
// 		document.getElementsByClassName("specs").innerHTML = albumsAdded.join(" ");
// 	}

