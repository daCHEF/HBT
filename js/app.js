document.addEventListener('DOMContentLoaded', () => {
    const envelopeButton = document.getElementById('envelopeButton');
    const birthdayContent = document.getElementById('birthdayContent');
    const musicToggle = document.getElementById('musicToggle');
    const birthdaySong = document.getElementById('birthdaySong');
    
    let isPlaying = false; // Track music state

    // Event listener to reveal content and start music/animations
    envelopeButton.addEventListener('click', () => {
        // Show the birthday content and hide the envelope
        birthdayContent.classList.remove('hidden');
        envelopeButton.style.display = 'none';

        // Optionally, start the music immediately
        birthdaySong.play();
        isPlaying = true;
        musicToggle.textContent = '🎵 Pause Music';

        // Start balloons and confetti animations
        setInterval(createConfetti, 200);
        setInterval(createBalloon, 1000);
    });

    // Music toggle button
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
});

// Function to create confetti
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(confetti);

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

// Function to create balloons
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    document.body.appendChild(balloon);

    setTimeout(() => balloon.remove(), 6000);
}