document.addEventListener('DOMContentLoaded', function() {
    // Text rotation animation for "built for" section
    const audiences = document.querySelectorAll('.audience');
    let currentIndex = 0;
    
    function rotateText() {
        // Hide current item
        audiences[currentIndex].classList.remove('active');
        
        // Move to next item
        currentIndex = (currentIndex + 1) % audiences.length;
        
        // Show next item
        audiences[currentIndex].classList.add('active');
    }
    
    // Initial setup - show first item
    if (audiences.length > 0) {
        audiences[0].classList.add('active');
        
        // Rotate text every 3 seconds
        setInterval(rotateText, 3000);
    }
    
    // Form submission handling (placeholder)
    const form = document.querySelector('.mobile-input');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input');
            alert(`Thank you! We'll contact you at ${input.value}`);
            input.value = '';
        });
    }
});

    // Stats counter animation (excluding the 24/7 card)
    const statCards = document.querySelectorAll('.stat-card:not(:last-child)');
    
    function animateStats() {
        statCards.forEach(card => {
            const numberElement = card.querySelector('.stat-number');
            const finalNumber = parseFloat(numberElement.textContent.replace(/[^0-9.]/g, ''));
            const suffix = numberElement.textContent.replace(/[0-9.]/g, '');
            
            // Only animate if the number is valid
            if (!isNaN(finalNumber)) {
                let start = 0;
                const duration = 2000; // 2 seconds
                const increment = finalNumber / (duration / 16); // 60fps
                
                const timer = setInterval(() => {
                    start += increment;
                    if (start >= finalNumber) {
                        clearInterval(timer);
                        numberElement.textContent = finalNumber.toLocaleString() + suffix;
                    } else {
                        // Format numbers with commas if needed
                        if (finalNumber >= 1000) {
                            numberElement.textContent = Math.floor(start).toLocaleString() + suffix;
                        } else {
                            numberElement.textContent = Math.floor(start) + suffix;
                        }
                    }
                }, 16);
            }
        });
    }
    
    // Animate when section comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        observer.observe(aboutSection);
    }


    // Animation for Why Section
document.addEventListener('DOMContentLoaded', function() {
    const whySection = document.querySelector('.why-section');
    
    if (whySection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate mobile image
                    const mobileImage = document.querySelector('.mobile-image');
                    mobileImage.style.transform = 'translateY(0)';
                    mobileImage.style.opacity = '1';
                    
                    // Animate left features
                    const leftFeatures = document.querySelectorAll('.features-left .feature-card');
                    leftFeatures.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.transform = 'translateX(0)';
                            card.style.opacity = '1';
                        }, index * 150);
                    });
                    
                    // Animate right features
                    const rightFeatures = document.querySelectorAll('.features-right .feature-card');
                    rightFeatures.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.transform = 'translateX(0)';
                            card.style.opacity = '1';
                        }, index * 150 + 300);
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(whySection);

        // Set initial state for animation
        const mobileImage = document.querySelector('.mobile-image');
        mobileImage.style.transform = 'translateY(20px)';
        mobileImage.style.opacity = '0';
        mobileImage.style.transition = 'all 0.5s ease';
        
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            if (card.closest('.features-left')) {
                card.style.transform = 'translateX(-20px)';
            } else {
                card.style.transform = 'translateX(20px)';
            }
            card.style.opacity = '0';
            card.style.transition = 'all 0.5s ease';
        });
    }
});

// P&L Counter Animation
function animatePandL() {
    const counterElement = document.querySelector('.counting-number');
    const percentageElement = document.querySelector('.percentage');
    
    if (counterElement && percentageElement) {
        // Animate the last 3 digits (000 to 999)
        let count = 0;
        const duration = 3000; // 3 seconds
        const increment = 999 / (duration / 16); // 60fps
        
        const timer = setInterval(() => {
            count += increment;
            if (count >= 999) {
                clearInterval(timer);
                counterElement.textContent = '999';
            } else {
                counterElement.textContent = Math.floor(count).toString().padStart(3, '0');
            }
        }, 16);
        
        // Small animation for percentage (optional)
        let percent = 0;
        const finalPercent = 6.35;
        const percentIncrement = finalPercent / (duration / 16);
        
        const percentTimer = setInterval(() => {
            percent += percentIncrement;
            if (percent >= finalPercent) {
                clearInterval(percentTimer);
                percentageElement.textContent = finalPercent.toFixed(2);
            } else {
                percentageElement.textContent = percent.toFixed(2);
            }
        }, 16);
    }
}

// Animate when section comes into view
const superTradersObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animatePandL();
            superTradersObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const superTradersSection = document.querySelector('.super-traders-section');
if (superTradersSection) {
    superTradersObserver.observe(superTradersSection);
}