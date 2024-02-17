const button = document.querySelector('input');

button.addEventListener('switchTheme', () => {
  document.body.classList.toggle('light');
})
