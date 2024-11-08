// Create a single piece of confetti
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(confetti);

    // Animate the confetti piece
    let rotation = 0;
    const animate = () => {
        confetti.style.transform = `translateY(${rotation}px) rotate(${rotation}deg)`;
        rotation += 5;
        
        if (rotation < window.innerHeight + 100) {
            requestAnimationFrame(animate);
        } else {
            confetti.remove();
        }
    };
    animate();
}

// Create a single balloon
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    document.body.appendChild(balloon);

    setTimeout(() => balloon.remove(), 6000);
}

// Music player setup
document.addEventListener('DOMContentLoaded', () => {
    const musicToggle = document.getElementById('musicToggle');
    const birthdaySong = document.getElementById('birthdaySong');
    let isPlaying = false;

    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            birthdaySong.pause();
            musicToggle.textContent = '🎵 Play Music';
        } else {
            birthdaySong.play();
            musicToggle.textContent = '🎵 Pause Music';
        }
        isPlaying = !isPlaying;
    });

    setInterval(createConfetti, 200);  // Create confetti every 200 ms
    setInterval(createBalloon, 1000);  // Create balloon every second
});