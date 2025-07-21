AOS.init();
const toggleBtn = document.getElementById('theme-toggle');

function setTheme(mode) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(mode);
    localStorage.setItem('theme', mode);
  }

toggleBtn.addEventListener('click', () => {
    const current = document.body.classList.contains('dark') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
});

const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
});


let slideIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');

function changeSlide(direction) {
      slides[slideIndex].classList.remove('active');
      slideIndex = (slideIndex + direction + slides.length) % slides.length;
      slides[slideIndex].classList.add('active');
}


setInterval(() => changeSlide(1), 5000);



const scrollBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });