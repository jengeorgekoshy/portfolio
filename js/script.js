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

$("#submit-form").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbycZr61CEe_6g3SUsbMrrortRy4-YUbqaJSpVCYUg7UXSLx9NI9Dp3FlmX0bzzs5dq6/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})