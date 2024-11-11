document.addEventListener('DOMContentLoaded', () => {
    const flowers = document.querySelectorAll('.flower');

    flowers.forEach(flower => {
        flower.addEventListener('click', () => {
            alert(flower.getAttribute('data-message'));
        });
    });

    // Carousel effect for messages
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextMessage() {
        carouselItems[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].style.display = 'block';
    }

    setInterval(showNextMessage, 3000);
    carouselItems[currentIndex].style.display = 'block';
});
