// Sélectionner le bouton et le paragraphe où le message sera affiché
const button = document.getElementById('myButton');
const messageParagraph = document.getElementById('message');

// Ajouter un écouteur d'événement pour le clic sur le bouton
button.addEventListener('click', function() {
    // Afficher le message dans le paragraphe
    messageParagraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
});
