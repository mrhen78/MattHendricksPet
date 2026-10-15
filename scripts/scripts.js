

/*fixed navbar for large screen scrolling*/

var menu = document.getElementById("menu");
var offset = menu.offsetHeight;
window.onscroll = function () {
  if (window.scrollY > offset - 10) {
    menu.classList.add("stickynav");
  } else if (window.scrollY < offset - 20) {
    menu.classList.remove("stickynav");
  }
};

/*Turning the Drop Down Nav For Smaller Screen Sizes On and Off*/

document.querySelector(".burger").addEventListener("click", function () {
  if (
    document.querySelector("ul:nth-child(2)").className === "dropdownnav" ||
    document.querySelector("ul:nth-child(2)").className === "dropdownsm2"
  )
    document.querySelector("ul:nth-child(2)").className = "dropdownsm";
  else document.querySelector("ul:nth-child(2)").className = "dropdownsm2";
});

/*Animating Morph From Hanburger to X*/

/*Middle Burger Line*/

document.querySelector(".burger").addEventListener("click", function () {
  if (
    document.querySelector(".burger span:nth-child(2)").className === "span2" ||
    document.querySelector(".burger span:nth-child(2)").className ===
    "burgerMiddleAnimation2"
  )
    document.querySelector(".burger span:nth-child(2)").className =
      "burgerMiddleAnimation1";
  else
    document.querySelector(".burger span:nth-child(2)").className =
      "burgerMiddleAnimation2";
});

/*Top Burger Line*/

document.querySelector(".burger").addEventListener("click", function () {
  if (
    document.querySelector(".burger span:nth-child(1)").className === "span1" ||
    document.querySelector(".burger span:nth-child(1)").className ===
    "burgerTopAnimation2"
  )
    document.querySelector(".burger span:nth-child(1)").className =
      "burgerTopAnimation1";
  else
    document.querySelector(".burger span:nth-child(1)").className =
      "burgerTopAnimation2";
});

/*Bottom Burger Line*/

document.querySelector(".burger").addEventListener("click", function () {
  if (
    document.querySelector(".burger span:nth-child(3)").className === "span3" ||
    document.querySelector(".burger span:nth-child(3)").className ===
    "burgerBottomAnimation2"
  )
    document.querySelector(".burger span:nth-child(3)").className =
      "burgerBottomAnimation1";
  else
    document.querySelector(".burger span:nth-child(3)").className =
      "burgerBottomAnimation2";
});

// Get DOM elements
const gridImages = document.querySelectorAll('.gridImage');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

// Open lightbox when a grid image is clicked
gridImages.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'flex';       // Show overlay
    lightboxImg.src = image.src;           // Copy clicked image source to lightbox
    lightboxImg.alt = image.alt;           // Copy alt text
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  });
});

// Close lightbox when 'X' is clicked
closeBtn.addEventListener('click', closeLightbox);

// Close lightbox if user clicks anywhere on the dark background
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Close function
function closeLightbox() {
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}












