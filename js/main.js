document.documentElement.classList.add("js-enabled");

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
}

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
    if (!header) return;

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const navLinks = document.querySelectorAll(".navbar a");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach(function (link) {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }

    link.addEventListener("click", function () {
        if (navbar) {
            navbar.classList.remove("active");
        }
    });
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(function (element) {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const dynamicCards = document.querySelectorAll(
    ".section-card, .project-card, .timeline-item, .skill-card, .gallery-card, .profile-side, .main-description"
);

dynamicCards.forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -2;
        const rotateY = ((x - centerX) / centerX) * 2;

        card.style.transform =
            "perspective(900px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) translateY(-6px)";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "";
    });
});
