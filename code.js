document.addEventListener("DOMContentLoaded", () => {
    // 1. Animasi Typing Effect pada Hero Section
    const textElement = document.querySelector(".typewriter");
    const textToType = textElement.innerText;
    textElement.innerText = "";
    
    let i = 0;
    function typeWriter() {
        if (i < textToType.length) {
            textElement.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Kecepatan mengetik (ms)
        }
    }
    
    // Mulai mengetik setelah sedikit delay
    setTimeout(typeWriter, 500);


    // 2. Scroll Animation (Intersection Observer)
    // Mendeteksi ketika elemen masuk ke layar
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Elemen terpicu saat 10% terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Hentikan observasi setelah animasi berjalan
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
});