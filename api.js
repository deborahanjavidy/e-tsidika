// Récupération des éléments du DOM
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Fonction pour ajouter un message dans le chat
function addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Faire défiler vers le bas
}

// Fonction pour envoyer un message
function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === "") return; // Ne rien faire si l'input est vide

    // Afficher le message de l'utilisateur
    addMessage(userMessage, 'user');

    // Appel à l'API de Wit.ai
    fetch(`https://api.wit.ai/message?q=${encodeURIComponent(userMessage)}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer GZBOGQVD2HKRS5MJ3OSDBTK3ZKH65TYS',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const responseText = data.text || "Désolé, je n'ai pas compris"; // Traite la réponse de Wit.ai
        addMessage(responseText, 'ia'); // Affiche la réponse dans la chatbox
    })
    .catch(error => {
        console.error('Erreur:', error);
    });

    // Réinitialiser l'input
    userInput.value = '';
}

// Événements
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage(); // Appel de la même fonction pour envoyer le message
    }
});
