// DATA
//
// data for holding the number of the page we are on
let pageNumber = 0

// content of the pages
const pages = [
  {copy: 'a Brooklyn-based graphic designer', background: '#edc7a9', circle: '#3e78ed'},
  {copy: "Kanye West's biggest fan", background: '#a1fffe', circle: '#e34a47'},
  {copy: 'looking for a job at the start of October', background: '#d3c7f3', circle: '#f7fe00'},
  {
    copy: `letting you <a href="pdf.pdf" download>download her PDF</a>`,
    background: '#faffb8',
    circle: '#b472e6'
  }
]

// select the relevant tag in the html
const nextTag = document.querySelector('footer img.next')
const prevTag = document.querySelector('footer img.prev')
const randTag = document.querySelector('footer img.rand')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')

// FUNCTIONS
//
// a function for increasing the pageNumber
const next = function() {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}

// a function for decreasing the pageNumber
const prev = function() {
  pageNumber = pageNumber - 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

// a function for picking a random pageNumber
const rand = function() {
//   pageNumber = Math.floor(Math.random() * pages.length)
  pages.sort(function(a, b){return 0.5 - Math.random()})
  updateSection()
}

// this will update the page content and style
const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

// EVENTS
//
// run the next function when we click the next arrow
nextTag.addEventListener('click', function() {
  next()
})

// run the prev function when we click the prev arrow
prevTag.addEventListener('click', function() {
  prev()
})

// run the rand function when we click the rand arrow
randTag.addEventListener('click', function() {
  rand()
})

// when a user presses a key, check for arrow left, arrow right or arrow up
// and then run prev, next or rand respectively
document.addEventListener('keyup', function(event) {
  console.log(event)

  if (event.key == 'ArrowRight') {
    next()
  }

  if (event.key == 'Arrowleft') {
    prev()
  }
  
  if (event.key == 'Space') {
    rand()
  }
})
