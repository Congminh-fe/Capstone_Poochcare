document.getElementById("open-movie").onclick = function () {
  var openMovie = document.getElementById("movie_popup");
  openMovie.style.display = "flex";
};
document.getElementById("close-movie").onclick = function () {
  var closeMovie = document.getElementById("movie_popup");
  closeMovie.style.display = "none";
};
