const audio = document.getElementsByTagName("audio")[0];
const title = document.getElementById("trackName");
const playList = document.getElementById("playlist");

const source = [
  "Naruto - Loneliness (Riki リキ Remix)",
  "Naruto Shippuden - Byakuya (Kayou. Remix)",
  "Naruto Shippuden - Guren (G.P.R Beat Remix)",
  "Naruto Shippuden - Loneliness (Chenow Remix)",
  "Naruto Shippuden - Loneliness (Kayou Remix)",
  "Naruto Shippuden - Loneliness (Leon Alvarez Remix)",
  "Naruto Shippuden - Loneliness (Musicality Oriental Trap Remix)",
  "Naruto Shippuden - Loneliness (Trap Remix)",
  "Naruto Shippuden - Loneliness ~ Despair (Meflurn Remix)",
  "Naruto Shippuden - Old Friend (LSB Remix)",
  "Naruto Shippuden - Rainy Day (Kayou Remix)",
  "Naruto Shippuden - Saika (LSB Remix)",
  "Naruto Shippuden - Samidare (fxego 𝒇 vrctic Remix)",
  "Naruto Shippuden - Samidare (fxego 𝚇 vrctic Remix)",
  "Naruto Shippuden - Samidare (Nivro Remix)",
  "Naruto Shippuden - Shirohae (LSB Beats Remix)",
  "Naruto Shippuden - Tragic (Anigam3 Remix) [SM Release]",
];

var count = 0;
audio.src = "./songs/" + source[count] + ".mp3";
title.innerHTML = source[count];

source.forEach((s) => {
  playList.innerHTML += `<div class="song"><a onClick="byName('${s}')">${s}</a></div>`;
});

function byName(name) {
  for (let count = 0; count !== source.length - 1; count++) {
    if (source[count] === name) {
      backgroundChange();
      switchTrack(count);
      break;
    }
  }
}

// function playAudio() {
//   audio.play();
// }
// function pauseAudio() {
//   audio.pause();
// }

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
}

function previousAudio() {
  if (count !== 0) {
    count--;
    switchTrack(count);
  } else {
    count = source.length - 1;
    switchTrack(count);
  }
}

function nextAudio() {
  backgroundChange();
  if (count !== source.length - 1) {
    count++;
    switchTrack(count);
  } else {
    count = 0;
    switchTrack(count);
  }
}

function switchTrack(index) {
  audio.src = "./songs/" + source[index] + ".mp3";
  audio.currentTime = 0;
  audio.play();
  trackName(index);
}

function trackName(index) {
  title.innerHTML = source[index];
}

function backgroundChange() {
  const min = 1;
  const max = 9;
  const randomNumberInRange = Math.random() * (max - min) + min;
  const wholeRandomNumber = Math.floor(randomNumberInRange);
  document.body.style.background = `url("./images/${wholeRandomNumber}.jpg") no-repeat`;
}
