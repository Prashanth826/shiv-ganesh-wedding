// =============================
// AOS Animation
// =============================
AOS.init({
    duration: 1000,
    once: true
});

// =============================
// Preloader
// =============================
window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 600);

    }, 1200);

});

// =============================
// Open Invitation
// =============================

const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {

    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";

    }, 700);

    music.play().catch(() => {});

    startConfetti();

});

// =============================
// Music Button
// =============================

const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicBtn.innerHTML =
            '<i class="fa-solid fa-volume-high"></i>';

    } else {

        music.pause();

        musicBtn.innerHTML =
            '<i class="fa-solid fa-music"></i>';

    }

});

// =============================
// Countdown Timer
// =============================

// Change this date later
const weddingDate = new Date(
    "November 15, 2026 09:15:00"
).getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {

        document.getElementById("countdown").innerHTML =
            "<h2>The Wedding Day Has Arrived ❤️</h2>";

        return;
    }

    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60))
            / 1000
        );

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateCountdown, 1000);

updateCountdown();

// =============================
// Confetti
// =============================

function startConfetti() {

    confetti({

        particleCount: 180,

        spread: 140,

        origin: {

            y: 0.6

        }

    });

}

// =============================
// Flower Petals Animation
// =============================

const flowerContainer =
    document.getElementById("flowers");

function createFlower() {

    const flower =
        document.createElement("div");

    flower.className = "flower";

    flower.innerHTML = "🌸";

    flower.style.left =
        Math.random() * window.innerWidth + "px";

    flower.style.animationDuration =
        5 + Math.random() * 6 + "s";

    flower.style.fontSize =
        18 + Math.random() * 20 + "px";

    flower.style.opacity =
        Math.random();

    flowerContainer.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 11000);

}

setInterval(createFlower, 400);

// =============================
// Gallery Click Effect
// =============================

const galleryImages =
    document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        img.classList.toggle("zoom");

    });

});

// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =============================
// Fade Hero Title
// =============================

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".hero-content");

    if (!hero) return;

    hero.style.opacity =
        1 - window.scrollY / 700;

});

// =============================
// Floating Music Button Animation
// =============================

setInterval(() => {

    musicBtn.classList.toggle("pulse");

}, 1200);

// =============================
// Reveal Cards
// =============================

const cards =
    document.querySelectorAll(".card");

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

cards.forEach(card => {

    observer.observe(card);

});

// =============================
// Console Message ❤️
// =============================

console.log(
"%cShiv Ganesh ❤️ Keerthana Wedding Website",
"color:#b8860b;font-size:18px;font-weight:bold;"
);

console.log(
"Designed with ❤️"
);
