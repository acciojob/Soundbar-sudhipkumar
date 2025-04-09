const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    stopAllSounds();
    const soundId = button.dataset.sound;
    const audio = document.getElementById(soundId);
    if (audio) audio.play();
  });
});

stopButton.addEventListener('click', stopAllSounds);

function stopAllSounds() {
  const allAudio = document.querySelectorAll('audio');
  allAudio.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}
