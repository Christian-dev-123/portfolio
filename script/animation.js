document.addEventListener('DOMContentLoaded', function() {
    const slideTexts = document.querySelectorAll('.slide-text');
    function checkSlideIn() {
        slideTexts.forEach(slideText => {
            const rect = slideText.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top < windowHeight && rect.bottom > 0) {
                slideText.classList.add('slide-in');
            }
        });
    }
    window.addEventListener('scroll', checkSlideIn);
    checkSlideIn();
});