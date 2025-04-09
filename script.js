const sounds = {
  applause: 'https://www.soundjay.com/human/applause-01.mp3',
  babyCrying: 'https://www.soundjay.com//human/sounds/baby-crying-01.mp3',
  crowdTalking: 'https://www.soundjay.com//human/sounds/crowd-talking-1.mp3',
  footStep: 'https://www.soundjay.com//footsteps/sounds/footsteps-1.mp3',
  heartBeat: 'https://www.soundjay.com//human/sounds/heartbeat-01a.mp3',
  laughing: 'https://www.soundjay.com//human/sounds/man-laughing-01.mp3'
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