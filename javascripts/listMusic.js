console.log("hi Dara");

// When the user clicks on "List Music" in the navigation bar, the Add Music View should be hidden, and the List Music View should be shown.


var listMusicLink = document.getElementById("list-link");
var viewList = document.getElementById("listMusicView");

listMusicLink.addEventListener("click", function(event) {
  event.preventDefault();
  musicAdd.classList.add("hidden");

  viewList.classList.add("visible");
  viewList.classList.remove("hidden");
});
