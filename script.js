 const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
    const soundMap = {
      applause: 'https://assets.mixkit.co/sfx/preview/mixkit-small-crowd-applause-487.mp3',
      boo: 'https://assets.mixkit.co/sfx/preview/mixkit-audience-boo-369.mp3',
      gasp: 'https://assets.mixkit.co/sfx/preview/mixkit-cartoon-surprise-gasp-1023.mp3',
      tada: 'https://assets.mixkit.co/sfx/preview/mixkit-winning-chimes-2011.mp3',
      victory: 'https://assets.mixkit.co/sfx/preview/mixkit-game-level-completed-2059.mp3',
      wrong: 'https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-buzz-950.mp3'
    };

    const buttonsContainer = document.getElementById('buttons');
    let currentAudio = null;

    sounds.forEach(sound => {
      const btn = document.createElement('button');
      btn.className = 'btn';
      btn.innerText = sound;
      btn.addEventListener('click', () => {
        stopSound();
        currentAudio = new Audio(soundMap[sound]);
        currentAudio.play();
      });
      buttonsContainer.appendChild(btn);
    });

    // Stop button
    const stopBtn = document.createElement('button');
    stopBtn.className = 'stop';
    stopBtn.innerText = 'stop';
    stopBtn.addEventListener('click', stopSound);
    buttonsContainer.appendChild(stopBtn);

    function stopSound() {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    }