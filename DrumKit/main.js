window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.keys li[data-key="${e.key}"]`);

    if(!audio) return;
    console.log(audio);
    console.log(key);

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    
    this.setTimeout(() => {
        key.classList.remove('playing');
    }, 70);
});