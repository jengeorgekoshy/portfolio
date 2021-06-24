function toggleMenu(){
    const menuToggle = document.querySelector('.toggle')
    const nav = document.querySelector('.nav')
    menuToggle.classList.toggle('active')
    nav.classList.toggle('active')
}

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*
const parallax = document.getElementById("parallax")

window.addEventListener("scroll", () => {
  let offset = window.pageYOffset
  parallax.style.backgroundPositionY = offset * 0.2 + "px"
})

*/