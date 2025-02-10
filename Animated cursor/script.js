document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    // Randomize the size of the smoke particles
    const size = Math.random() * 20 + 10; // Random size between 10px and 30px
    trail.style.width = `${size}px`;
    trail.style.height = `${size}px`;

    // Randomize the animation duration for a more dynamic effect
    trail.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;

    document.body.appendChild(trail);

    // Remove the trail element after the animation ends
    setTimeout(() => {
        trail.remove();
    }, 1000);
});