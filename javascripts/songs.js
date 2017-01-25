console.log("here are some songs!");// Requirements

// Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Students must use JavaScript to create a list of songs in the index.html file for their Music History project. Have them download the songs.js file, which contains an array of strings with song information.

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


// Each student must add one song to the beginning and the end of the array.

songs.unshift("Where is My Mind? > by The Pixies on the album Surfer Rosa"); //add song to beginning of array

songs.push("Reckoner > by Radiohead on the album In Rainbows"); //add song to end of array

// Loop over the array and remove any words or characters that obviously don't belong.

	var edit1 = [];
	for (var i = 0; i < songs.length; i++) {
		songs[i] = songs[i].replace(/[!*(@]/g, "");
		edit1.push(songs[i]);
	};
		console.log(edit1);

// Students must find and replace the > character in each item with a - character.

	var edit2 = [];
	for (var i = 0; i < edit1.length; i++) {
		edit1[i] = edit1[i].replace(">", "-");
		edit2.push(edit1[i]);
	};
		console.log(edit2);


//Printed to DOM with added breaks

	for (var i = 0; i < edit2.length; i++) {
		var songsText = document.getElementById("finalList");
		songsText.innerHTML += `<p>${edit2[i]}</p><br>`;
};

