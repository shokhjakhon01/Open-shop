const OpenButton = document.querySelector('.menu__open')
const closeButton = document.querySelector('.close__button')
const headerIntro = document.querySelector('.header__intro')
const headerNav = document.querySelector('.header__nav')
const introLink = document.querySelectorAll('.intro__list__link')
const languageMenu = document.querySelector('.language__menu')
const languageLink = document.querySelectorAll('.language__link')
const inputSearch = document.querySelector('.input__searches')


OpenButton.addEventListener('click',()=>{
  headerIntro.style.transform = 'translateY(0%)'
  headerIntro.style.display = 'block'
  headerNav.style.transform = 'translateY(0%)'
  headerNav.style.display = 'block'
  inputSearch.style.transform = 'translateY(0%)'
  inputSearch.style.display = 'block'
  headerIntro.appendChild(headerNav)
  headerIntro.appendChild(inputSearch)
})

closeButton.addEventListener('click',()=>{
  headerIntro.style.transform = 'translateY(-300%)'
  headerIntro.style.display = 'none'
  headerNav.style.transform = 'translateY(-300%)'
  headerNav.style.display = 'none'
  inputSearch.style.transform = 'translateY(-300%)'
  inputSearch.style.display = 'none'
})

introLink[0].addEventListener('click',()=>{
  languageMenu.classList.toggle('active')
})


languageLink[0].addEventListener('click',()=>{
  introLink[0].innerHTML = 'Uzbek'
})
languageLink[1].addEventListener('click',()=>{
  introLink[0].innerHTML = 'Russian'
})
languageLink[2].addEventListener('click',()=>{
  introLink[0].innerHTML = 'German'
})
