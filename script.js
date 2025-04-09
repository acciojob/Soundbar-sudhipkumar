const sounds = {
  applause: 'https://www.soundjay.com/human/applause-01.mp3',
  boo: 'https://www.soundjay.com/human/boo-01.mp3',
  gasp: 'https://www.soundjay.com/human/gasp-01.mp3',
  tada: 'https://www.soundjay.com/button/beep-07.wav',
  victory: 'https://www.soundjay.com/misc/small-crowd-cheer-01.mp3',
  wrong: 'https://www.soundjay.com/misc/fail-buzzer-01.mp3'
};


    const buttonsContainer = document.getElementById('buttons');
    let currentAudio = null;

    function stopSound() {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    }

    Object.keys(sounds).forEach(sound => {
      const btn = document.createElement('button');
      btn.className = 'btn';
      btn.innerText = sound;
      btn.addEventListener('click', async () => {
        stopSound();
        currentAudio = new Audio(sounds[sound]);
        try {
          await currentAudio.play();
        } catch (e) {
          console.log("Playback skipped:", e.message); // silently handle AbortError
        }
      });
      buttonsContainer.appendChild(btn);
    });

    const stopBtn = document.createElement('button');
    stopBtn.className = 'stop';
    stopBtn.innerText = 'stop';
    stopBtn.addEventListener('click', stopSound);
    buttonsContainer.appendChild(stopBtn);