 const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
    const soundMap = {
      applause: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_2f60f4a3d4.mp3',
      boo: 'https://cdn.pixabay.com/download/audio/2021/08/09/audio_55cb373fe0.mp3',
      gasp: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_d5e3eb2b18.mp3',
      tada: 'https://cdn.pixabay.com/download/audio/2021/08/04/audio_c96b3e4cb9.mp3',
      victory: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_872d08e0c4.mp3',
      wrong: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_ae0311f3d3.mp3'
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
        currentAudio.play()
          .then(() => console.log(`${sound} is playing`))
          .catch(err => console.error(`Error playing ${sound}:`, err));
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
        console.log('Stopped audio');
      }
    }