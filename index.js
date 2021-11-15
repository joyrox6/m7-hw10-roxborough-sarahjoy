// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
var nameSpan = document.cookie('name')
var textarea = localStorage.getItem('text')

formEl.onsubmit = function(form) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  formEl.onsubmit = function(form) {
    form.preventDefault()
    var name = textarea.value

    localStorage.setItem('textarea', name)
    formEl.textContent = name.textcontent
  }

  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  function clearContent(textarea) {
    document.getElementById() = '';
  }

  localStorage.clear();

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp