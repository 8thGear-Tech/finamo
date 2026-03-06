const toggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('.main-nav')
const navClose = document.querySelector('.nav-close')
const brand = document.querySelector('.brand')

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open')
  })
}

if (navClose && nav) {
  navClose.addEventListener('click', () => {
    nav.classList.remove('open')
  })
}

if (brand && nav) {
  brand.addEventListener('click', (e) => {
    if (window.innerWidth <= 960) {
      e.preventDefault()
      nav.classList.toggle('open')
    }
  })
}

window.addEventListener('load', () => {
  if (window.innerWidth <= 960) {
    nav.classList.add('open')
  }
})