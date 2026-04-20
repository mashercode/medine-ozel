// Sürekli değişecek olan sözler
const messages = [
    "İyi ki hayatımdasın Medine...",
    "Kahverengi gözlerinde kaybolmak en sevdiğim şey.",
    "Seninle her anım çok değerli.",
    "Gülüşün dünyaya bedel...",
    "Bu dijital köşe sadece bizim için."
];

let currentIndex = 0;
const textElement = document.getElementById('changing-text');

// Sözleri 3 saniyede bir değiştirme
setInterval(() => {
    textElement.style.opacity = 0;
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % messages.length;
        textElement.innerText = messages[currentIndex];
        textElement.style.opacity = 1;
    }, 1000);
}, 3000);

// Uçuşan küçük pembe kalpler oluşturma
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Her 300 milisaniyede yeni bir kalp çıkar
setInterval(createFloatingHeart, 300);