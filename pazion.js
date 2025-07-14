// SCRIPT FOR TYPED TEXT ANIMATION
const typed = new Typed('.multiple-text', {
    strings: ['Problem Identification & Solution Provider Company'],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1200,
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
const closeBtn = document.getElementsByClassName("close-btn")[0];

// Open the modal when the button is clicked
btn.onclick = function(event) {
  event.preventDefault(); // Prevents the link from scrolling
  modal.style.display = "block";
}

// Close the modal when the 'x' is clicked
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}