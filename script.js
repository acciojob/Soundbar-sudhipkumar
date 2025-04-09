//your JS code here. If required.
// Array of sound file names (without path)
const sounds = ['sound1.mp3', 'sound2.mp3', 'sound3.mp3'];

const buttonsContainer = document.getElementById('buttons');

sounds.forEach((soundFile, index) => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = `Play Sound ${index + 1}`;
  btn.addEventListener('click', () => {
    stopSounds();
    const audio = new Audio(`sounds/${soundFile}`);
    audio.play();
    window.currentAudio = audio; // Store it to stop later
  });
  buttonsContainer.appendChild(btn);
});

document.querySelector('.stop').addEventListener('click', () => {
  stopSounds();
});

function stopSounds() {
  if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0;
  }
}
