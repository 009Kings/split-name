let nameHeaders = document.querySelectorAll('.split')

document.querySelector('button').addEventListener('click', e => {
  let name = window.prompt('What is your name?')
  nameHeaders[0].textContent = nameHeaders[1].textContent = name;
})
