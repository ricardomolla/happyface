document.querySelector(".cara").addEventListener("mouseover", function() {
  this.classList.remove('feliz', 'enfado');
  this.classList.add('triste');
});

document.querySelector(".cara").addEventListener("mouseout", function() {
  this.classList.remove('triste', 'enfado');
  this.classList.add('feliz');
});

document.querySelector(".cara").addEventListener("click", function() {
  this.classList.remove('feliz', 'triste');
  this.classList.add('enfado');
});
