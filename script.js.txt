document.addEventListener('click', function(e) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️'; // Kalp emojisi
    heart.style.position = 'absolute';
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    heart.style.fontSize = '24px';
    
    // TIKLAMA KALBİNİ PEMBE YAPTIK
    heart.style.color = '#ff80ab'; // style.css'deki ana kalple aynı pembe
    
    heart.style.transition = 'transform 2s, opacity 2s, color 1s';
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = 'translateY(-120px) scale(1.2)';
        heart.style.opacity = '0';
        
        // Yükselirken daha açık bir pembeye dönüşsün
        heart.style.color = '#ffc1e3'; 
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 2000);
});