const loveNotes = [
    "İyi ki hayatımdasın Medine...",
    "Kahverengi gözlerin dünyamı aydınlatıyor.",
    "Seninle her şey daha güzel.",
    "Gülüşün kalbimdeki en güzel melodi.",
    "Bu site sadece senin için, prensesim."
];

let noteIndex = 0;
const textElement = document.getElementById('changing-text');

// Yazıları değiştir
setInterval(() => {
    textElement.style.opacity = 0;
    setTimeout(() => {
        noteIndex = (noteIndex + 1) % loveNotes.length;
        textElement.innerText = loveNotes[noteIndex];
        textElement.style.opacity = 1;
    }, 500);
}, 3500);

// Mobilde dokunma olayını yakala
document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    for(let i = 0; i < 5; i++) {
        createHeart(touch.pageX, touch.pageY);
    }
});

// Bilgisayarda tıklama olayını yakala (Test için)
document.addEventListener('click', (e) => {
    for(let i = 0; i < 5; i++) {
        createHeart(e.pageX, e.pageY);
    }
});

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '💗'; // Pembe kalp emojisi
    heart.className = 'flying-heart';
    
    const moveX = (Math.random() - 0.5) * 150;
    const moveY = (Math.random() - 0.5) * 150;
    
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    
    document.body.appendChild(heart);
    
    heart.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${moveX}px, ${moveY}px) scale(0)`, opacity: 0 }
    ], {
        duration: 1200,
        easing: 'ease-out'
    });

    setTimeout(() => heart.remove(), 1200);
}

// Sürekli alttan yükselen pembe kalpler
setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.className = 'flying-heart';
    heart.style.left = x + 'px';
    heart.style.top = '105vh';
    document.body.appendChild(heart);
    
    heart.animate([
        { transform: 'translateY(0)', opacity: 0.7 },
        { transform: 'translateY(-110vh)', opacity: 0 }
    ], {
        duration: 4000 + Math.random() * 2000,
        easing: 'linear'
    });

    setTimeout(() => heart.remove(), 6000);
}, 500);