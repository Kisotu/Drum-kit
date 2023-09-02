

const playAudio = (e) => {
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop if null
  audio.currentTime = 0; //rewinds to start
  audio.play();
}

window.addEventListener("keydown", playAudio);