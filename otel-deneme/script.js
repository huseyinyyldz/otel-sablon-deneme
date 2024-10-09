const slider = document.getElementById('slider');
const images = [
    '/panel-foto/1.jpg',
    '/panel-foto/2.jpg',
    '/panel-foto/3.jpg'
];
let currentIndex = 0;

function changeImage() {
    slider.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 3000); // 3 saniyede bir değişim
changeImage(); // İlk resim yükleme

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Toggle Service Details
function toggleServiceDetails(option) {
    option.classList.toggle('open');
}

// Toggle Sub-Option
function toggleSubOption(event, subOption) {
    event.stopPropagation(); // Parent elementlerin açılmasını engelle
    subOption.classList.toggle('open');
}
