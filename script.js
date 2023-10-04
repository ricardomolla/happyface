document.getElementById('face').addEventListener('mouseover', function() {
    this.textContent = '😔';
});

document.getElementById('face').addEventListener('mouseout', function() {
    this.textContent = '😊';
});
