/*Array of objects containing thumbnails, audio and titles*/
var songs = [
  {
    id: 1,
    imageSrc: "./thumbnails/Bella ciao thumbnail.jpg",
    audioSrc: "./Audio/Bella ciao.m4a",
    title: "Bella Ciao- Money Heist",
  },

  {
    id: 2,
    imageSrc: "./thumbnails/Despacito thumbnail.jpg",
    audioSrc: "./Audio/Despacito.mp3",
    title: "Despacito- Daady Yankee",
  },

  {
    id: 3,
    imageSrc: "./thumbnails/Excuses thumbnail.jpg",
    audioSrc: "./Audio/Excuses - A.P. dhillion.mp3",
    title: "Excuses song- A.P. Dhillion",
  },

  {
    id: 4,
    imageSrc: "./thumbnails/Intentions.jpg",
    audioSrc: "./Audio/Intentions.mp3",
    title: "Intensions- Justin Bieber",
  },

  {
    id: 5,
    imageSrc: "./thumbnails/on my way thumbnail.jpg",
    audioSrc: "./Audio/On my way.mp3",
    title: "On my way- Alan walker",
  },

  {
    id: 6,
    imageSrc: "./thumbnails/Prada thumbnail.jpg",
    audioSrc: "./Audio/Prada - Jass manak.mp3",
    title: "Prada- Jass manak",
  },

  {
    id: 7,
    imageSrc: "./thumbnails/Rhim jhim song thumbnail.jpg",
    audioSrc: "./Audio/Rhim Jhim song.mp3",
    title: "Rhim jhim Song- Jubin nautiyal",
  },

  {
    id: 8,
    imageSrc: "./thumbnails/yarri thumbnail.jpg",
    audioSrc: "./Audio/Yarri Official song.mp3",
    title: "Rhim jhim Song- Jubin nautiyal",
  },
];
/*Function to fetch songs, title and thumbnails */
function playaudio(songid) {
  var song = songs.find(function (song, index) {
    return song.id === songid;
  });

  document.getElementById("image_thumbnail").src = song.imageSrc;
  document.getElementById("audio_play").src = song.audioSrc;
  document.getElementById("audio_player_title").innerText = song.title;
  document.getElementById("audio_play").play();
}
