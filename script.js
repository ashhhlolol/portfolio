// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {
    myFunction();
};

function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar w3-card w3-animate-top w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substr(1);
            const targetElement = document.getElementById(targetId);
            window.scroll({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
            // script.js
function openLightbox(imageSrc, title, description) {
    document.getElementById("lightbox-img").src = imageSrc;
    document.getElementById("lightbox-title").innerHTML = title;
    document.getElementById("lightbox-description").innerHTML = description;
    document.getElementById("lightbox-modal").style.display = "block";
  }
  
  function closeLightbox() {
    document.getElementById("lightbox-modal").style.display = "none";
  }
  
        });
    });
});
