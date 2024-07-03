const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const imgId = document.querySelector('.img-id');
const galleryContainer = document.querySelector('.gallery-container');
galleryContainer.style.gridTemplateColumns = `repeat(${slides.length}, 1fr)`

let currentSlide = 0;
function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    updateSliderControls()
    updateThumbnailState(currentSlide);
}

prevBtn.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
});
nextBtn.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
});

function updateSliderControls() {
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
    imgId.innerHTML = `Image ${currentSlide + 1} of ${slides.length}`;
}

slides.forEach((img, index) => {
    const thumbnail = img.cloneNode();
    thumbnail.addEventListener('click', () => goToSlide(index));  
    galleryContainer.appendChild(thumbnail);
});
function updateThumbnailState(index) {
    galleryContainer.querySelectorAll('img').forEach((img, i) => {
        img.classList.toggle('active', i === index);
    })
}


