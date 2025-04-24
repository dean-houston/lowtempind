// JavaScript to handle the rotating header
document.addEventListener('DOMContentLoaded', () => {
    const rotatingHeaders = document.querySelectorAll('.rotating-header');
    let currentIndex = 0;

    setInterval(() => {
        rotatingHeaders[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % rotatingHeaders.length;
        rotatingHeaders[currentIndex].classList.add('active');
    }, 5000);
});

// JavaScript to animate percentage count
document.addEventListener('elementInView', function () {
    const percentageElements = document.querySelectorAll('p.numberroll');
    percentageElements.forEach((element) => {
        if (element.classList.contains('animated')) {
            return;
        }
        element.classList.add('animated');
        let currentPercentage = 0;
        const targetPercentage = parseInt(element.getAttribute('data-percentage'));
        const duration = 1000; // Duration in milliseconds
        const increment = targetPercentage / (duration / 10);

        // Animate the percentage count
        const interval = setInterval(() => {
            currentPercentage += increment;
            if (currentPercentage >= targetPercentage) {
                currentPercentage = targetPercentage;
                clearInterval(interval);
            }
            element.textContent = Math.floor(currentPercentage) + '%';
        }, 10);
    });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add scroll event listener to trigger animation
window.addEventListener('scroll', function () {
    const percentageElement = document.querySelector('p.numberroll');
    if (isInViewport(percentageElement)) {
        const event = new CustomEvent('elementInView', {
            detail: {
                element: percentageElement
            }
        });
        document.dispatchEvent(event);
    }
});

document.querySelectorAll('.smooth-scroll').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const url = el.getAttribute('href');
        const scrollPx = document.querySelector(url).offsetTop;
        scrollTo({
            top: scrollPx,
            left: 0,
            behavior: "smooth"
        });
    });
});

// Infinite loop animation for carousel
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = Array.from(carouselContainer.children);

// Duplicate carousel items for seamless looping
carouselItems.forEach(item => {
    const clone = item.cloneNode(true);
    carouselContainer.appendChild(clone);
});

let scrollAmount = 0;

function animateCarousel() {
    if (carouselContainer.classList.contains('paused')) {
        return;
    }

    scrollAmount -= 1; // Adjust the scroll speed here
    carouselContainer.style.transform = `translateX(${scrollAmount}px)`;

    // Reset scroll position seamlessly when it reaches the end
    if (Math.abs(scrollAmount) >= carouselItems[0].offsetWidth * carouselItems.length) {
        scrollAmount = 0;
        carouselContainer.style.transition = 'none';
        carouselContainer.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(() => {
            carouselContainer.style.transition = 'transform 0.1s linear';
        });
    }

    requestAnimationFrame(animateCarousel);
}

carouselContainer.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('mouseover', (event) => {
        event.stopPropagation();
        carouselContainer.classList.add('paused');
    });

    item.addEventListener('click', (event) => {
        event.stopPropagation();
        item.classList.toggle('show-large');
    });
});

carouselContainer.querySelectorAll('.carousel-item').forEach(item => {
    item.addEventListener('mouseleave', (event) => {
        event.stopPropagation();
        carouselContainer.classList.remove('paused');
        console.log(carouselContainer.querySelector('.show-large'));
        animateCarousel();
        setTimeout(() => {
            item.classList.remove('show-large');
        }, 1000);
    });
});

// Start the animation
animateCarousel();