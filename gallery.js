document.addEventListener('DOMContentLoaded', function () {
  const slideshows = document.querySelectorAll('.slideshow-container');

  slideshows.forEach(slideshow => {
    const slides = slideshow.querySelectorAll('img');
    const nextBtn = slideshow.querySelector('.next');
    const prevBtn = slideshow.querySelector('.prev');
    let current = 0;

    function showSlide(index) {
      slides[current].classList.remove('active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
      console.log("Showing slide:", current);
    }

    nextBtn.addEventListener('click', () => showSlide(current + 1));
    prevBtn.addEventListener('click', () => showSlide(current - 1));
  });
});
