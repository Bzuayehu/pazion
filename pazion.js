// SCRIPT FOR TYPED TEXT ANIMATION
const typed = new Typed('.multiple-text', {
    strings: ['Problem Identification', 'Solution Provider Company'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

// SCRIPT FOR ACTIVE NAVIGATION LINK ON SCROLL
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        };
    });
};

// SCRIPT FOR MODAL
const modal = document.getElementById("about-modal");
const btn = document.getElementById("more-about-btn");
const span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function(event) {
  event.preventDefault(); 
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// HAMBURGER NAVBAR
const hamburger = document.getElementById('hamburger-menu');
const navbar = document.querySelector('.navbar');

hamburger.onclick = function() {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
    document.body.classList.toggle('menu-open');
};

// Close menu on nav link click (mobile)
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});
