const songs = {
  lofi: "Lofi ",
  chill: "Chill'",
  upbeat: " Upbeat",
  hiphop: "Upbeat",
  rock:"Rock",
  love:"Love",
  dance: "Dance",
  sad: "Sad"
};

function matchMusic(mood) {
  const result = document.getElementById("result");
  const song = songs[mood];
  if (song) {
    result.textContent = `Your vibe match: 🎶 ${song}`;
  } 
  else {
    result.textContent = "No match found. Try again!";
  }
}
