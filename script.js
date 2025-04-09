 const sounds = [
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    ];

    const buttonsContainer = document.getElementById('buttons');
    let currentAudio = null;

    sounds.forEach((soundUrl, index) => {
      const btn = document.createElement('button');
      btn.className = 'btn';
      btn.innerText = `Play Sound ${index + 1}`;
      btn.addEventListener('click', () => {
        stopSounds();
        currentAudio = new Audio(soundUrl);
        currentAudio.play();
      });
      buttonsContainer.appendChild(btn);
    });

    document.querySelector('.stop').addEventListener('click', () => {
      stopSounds();
    });

    function stopSounds() {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    }