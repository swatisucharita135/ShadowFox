// Navigation section show/hide
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll(".section");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    sections.forEach((s) => s.classList.add("hidden"));
    target.classList.remove("hidden");
    window.scrollTo(0, 0);
  });
});

// Typewriter effect
const phrases = [
  "Passionate Software Engineer 💻",
  "Crafting Scalable Solutions ⚙",
  "Frontend & Backend Developer 🌐",
  "Clean Code Advocate 💡"
];

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;

const typewriterElement = document.getElementById("typewriter");

function type() {
  const phrase = phrases[currentPhrase];
  if (isDeleting) {
    currentChar--;
  } else {
    currentChar++;
  }

  typewriterElement.textContent = phrase.substring(0, currentChar);

  if (!isDeleting && currentChar === phrase.length) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  } else if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
  }

  setTimeout(type, isDeleting ? 40 : 80);
}

type();

// Scroll Animation for skills
window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.progress');
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      skill.classList.add('animated');
    }
  });
});