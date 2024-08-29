document.getElementById('celebrate-btn').addEventListener('click', function() {
    // Hide the black screen and button
    document.getElementById('black-screen').style.display = 'none';
    
    // Show the celebration text and start the confetti animation
    const celebrationText = document.getElementById('celebration-text');
    const confettiCanvas = document.getElementById('confetti-canvas');
    celebrationText.style.display = 'block';
    confettiCanvas.style.display = 'block';
    
    // Start confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Play background music
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play();
    
    // Show the sad message with a typing effect
    const sadMessage = document.getElementById('sad-message');
    sadMessage.style.display = 'block';
    const messageText = "Ennaku theriyum naan oru tharkuri,edhuvum use aagada piece and azhagum illa...but ennala mudinja alavuku best ah irruka try pannitu thaan irruken";
    
    const words = messageText.split(' ');
    sadMessage.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');

    let delay = 0;
    words.forEach((word, index) => {
        setTimeout(() => {
            sadMessage.querySelectorAll('.word')[index].style.opacity = 1;
        }, delay);
        delay += 500; // Adjust delay for typing effect speed
    });
});
