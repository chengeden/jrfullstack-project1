const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.nav-subpage')
const linkItem = document.querySelectorAll('.click-hide')
// const body = document.querySelector('body')

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  menuToggle.classList.toggle('active')
  showcase.classList.toggle('active')
})

linkItem.forEach(link => {
  link.addEventListener('click', () => {
    if(showcase.classList.contains('active')) {
      showcase.classList.toggle('active')
      menuToggle.classList.toggle('active')
    }
  })
})

// click anywhere to hide nav menu

// body.addEventListener('click', () => {
//   if(showcase.classList.contains('active')) {
//     showcase.classList.toggle('active')
//   }
// })

window.onload = function() {
  if (document.querySelectorAll("section:target").length == 0) {
    window.location = "#home";
  }
}