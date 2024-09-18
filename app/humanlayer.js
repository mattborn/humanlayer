const g = document.getElementById.bind(document)

g('collapse').addEventListener('click', e => {
  e.target.closest('.button').parentElement.classList.add('collapsed')
})

g('expand').addEventListener('click', e => {
  e.target.closest('.button').parentElement.classList.remove('collapsed')
})

// markdown
fetch('./readme.md')
  .then(response => response.text())
  .then(text => (g('readme').innerHTML = marked.parse(text)))
