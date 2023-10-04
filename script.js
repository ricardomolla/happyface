let enfadado = false; // Una variable para determinar si la cara fue clicada

document.querySelector(".cara").addEventListener("mouseover", function() {
    if (!enfadado) {
        this.classList.remove('feliz', 'enfado');
        this.classList.add('triste');
    }
});

document.querySelector(".cara").addEventListener("mouseout", function() {
    if (!enfadado) {
        this.classList.remove('triste', 'enfado');
        this.classList.add('feliz');
    }
});

document.querySelector(".cara").addEventListener("click", function() {
    this.classList.remove('feliz', 'triste');
    this.classList.add('enfado');
    enfadado = true; // Al hacer clic, se activa el modo enfado
});

// Si deseas que la cara vuelva a su estado normal después de algún tiempo cuando está enfadada, puedes agregar:
setTimeout(function() {
    let cara = document.querySelector(".cara");
    if (cara.classList.contains('enfado')) {
        cara.classList.remove('enfado');
        cara.classList.add('feliz');
        enfadado = false; // Se desactiva el modo enfado
    }
}, 3000); // Aquí, la cara volverá a su estado feliz después de 3 segundos. Puedes ajustar el tiempo si lo prefieres.
