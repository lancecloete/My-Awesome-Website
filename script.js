
const bannerAd = document.getElementById('bannerAd');
const bannerImage = document.getElementById('bannerImage');
const adImages = [
  './assets/ad1.jpg',
  './assets/ad2.jpg',
  './assets/ad3.jpg'
];

function getRandomIndex() {
  return Math.floor(Math.random() * adImages.length);
}

function loadRandomAd() {
  const randomIndex = getRandomIndex();
  const imageUrl = adImages[randomIndex];
  bannerImage.src = imageUrl;
  bannerImage.alt = `Ad ${randomIndex + 1}`;
}

// Initial load
loadRandomAd();

// Event listeners
bannerAd.addEventListener('click', loadRandomAd);
bannerAd.addEventListener('mouseover', loadRandomAd);
