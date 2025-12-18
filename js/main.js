document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Анимация прогресс-баров в CV
    const progressFills = document.querySelectorAll('.progress-fill');
    
    const animateProgress = () => {
        progressFills.forEach(bar => {
            const percentage = bar.getAttribute('data-done');
            bar.style.width = percentage;
        });
    };

    // Запускаем анимацию прогресс-баров, если мы на странице CV
    if (progressFills.length > 0) {
        setTimeout(animateProgress, 500);
    }

    // 2. Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 3. Эффект появления при скролле (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});