// Récupération des éléments du DOM
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');






// Fonction pour normaliser l'entrée de l'utilisateur
function normalizeInput(input) {
    return input.toLowerCase().trim(); // Normalise l'entrée (minuscules et suppression des espaces)
}

// Fonction pour ajouter un message au chat avec animation
function addMessage(content, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = content;
    
    // Ajout de l'animation pour la réponse de l'IA
    if (sender === 'ia') {
        messageElement.classList.add('slide-in');
    }
    
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Faire défiler vers le bas
}


// Fonction pour générer une réponse de l'IA
function generateResponse(input) {
    const normalizedInput = normalizeInput(input); // Normaliser l'entrée
    const functions = [
        recognizeGreeting, chacha, remerciement, aurevoir, recognizeHelpRequest, 
        recognizePheraxieQuestion, dami, blague, jeux, respondToUser,
        respondToCorrect, respondToIncorrect, recognizeMinouQuestion, 
        recognizePyjamasquesQuestion, recognizeYouTubersGamingQuestion, 
        recognizeMrBeastQuestion, recognizePeppaPigQuestion, 
        recognizeCestPasSorcierQuestion, recognizeFun6VideoQuestion, 
        recognizeGameCharacter, lol, zavatra, fad, eth// Ajoute zavatra ici
    ];
    
    let response = null;

    for (const func of functions) {
        response = func(normalizedInput); // Passer l'entrée normalisée
        if (response) break; // Si une réponse est trouvée, on arrête la recherche
    }

    // Si aucune fonction ne correspond, renvoyer une réponse aléatoire
    if (!response) {
        const fallbackResponses = [
            "Je ne suis pas sûr de comprendre.",
            "Peux-tu reformuler ça ?",
            "Je n'ai pas de réponse à ça.",
            "C'est intéressant !",
            "Parle-moi en plus.",
            "Je ne sais pas quoi dire.",
            "Ça me fait réfléchir.",
            "Hmmm, je vais devoir y penser.",
            "Désolé, je ne comprends pas cette instruction.",
            "Désolé, je ne comprends pas cette instruction.",
    "Pourrais-tu reformuler ta question ?",
    "Je ne suis pas sûr de ce que tu veux dire.",
    "Peux-tu m'expliquer cela différemment ?",
    "Je n'ai pas bien saisi, peux-tu clarifier ?",
    "Cette instruction m'échappe, peux-tu préciser ?",
    "Je ne suis pas capable de traiter ça, désolé.",
    "Peux-tu donner un exemple pour que je comprenne mieux ?",
    "Je suis un peu perdu avec cette demande.",
    "Cela dépasse mes capacités, pourrais-tu simplifier ?"
           
        ];
        response = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    }

    return response;
}

// Fonction pour gérer l'envoi d'un message
function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, 'user'); // Ajoute le message de l'utilisateur
        userInput.value = ''; // Réinitialise l'input

        // Simulation de la réponse de l'IA
        setTimeout(() => {
            const iaResponse = generateResponse(userMessage); // Générer une réponse basée sur l'entrée
            addMessage(iaResponse, 'ia'); // Ajoute la réponse de l'IA
        }, 1000); // Délai de 1 seconde pour simuler la réflexion de l'IA
    }
}

// Événements
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage(); // Envoie le message avec la touche Entrée
    }
});

// Fonction pour reconnaître les salutations
function recognizeGreeting(input) {
    const greetings = [
        "salut", "bonjour", "bonsoir", "hey", "hola", "salutations", 
        "coucou", "allô", "hi", "salut tout le monde", "yo", "bien le bonjour", 
        "salut ça va", "quoi de neuf", "comment ça va", "quoi de beau", 
        "slt", "bien", "hello", "greetings", "salut mon ami", 
        "salut à tous", "bonjour tout le monde", "bon matin", "bon après-midi", 
        "bonsoir tout le monde", "bonjour à vous", "salut les amis", "salu", 
        "yo yo", "hi there", "ahoy","cc","slt","salama", "manahoana"
    ];
    const regex = new RegExp(`\\b(${greetings.join('|')})\\b`, 'i');

    if (regex.test(input)) {
        const responses = [
            "Salut ! Comment ça va ?",
            "Bonjour ! J'espère que tu passes une bonne journée.",
            "Hey ! Quoi de neuf ?",
            "Coucou ! Ça fait plaisir de te voir.",
            "Bonjour à toi !",
            "Salut, comment s'est passée ta journée ?",
            "Yo ! Prêt pour une nouvelle aventure ?",
            "Allô ! Que puis-je faire pour toi ?",
            "Salut mon ami !",
            "Bonjour tout le monde !",
            "Salut ! Qu'est-ce que tu deviens ?",
            "Salut, comment va ta semaine ?",
            "Coucou ! Quel plaisir de te voir ici.",
            "Hey ! J'espère que tout va bien pour toi.",
            "Bonjour ! As-tu fait quelque chose d'intéressant récemment ?",
            "Salut ! As-tu des nouvelles à partager ?",
            "Bon matin ! Prêt pour la journée ?",
            "Bonsoir ! Prends-tu du temps pour te détendre ?",
            "Salut ! Quels sont tes projets pour aujourd'hui ?",
            "Bonjour ! Es-tu de bonne humeur ?",
            "Hey ! J'ai hâte de discuter avec toi."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return null; // Pas de salutation reconnue
}



function chacha(input) {
    const keywords = ["bestie", "meilleure amie", "voisine","amie"];
    const normalizedInput = normalizeInput(input);
    const containsKeyword = keywords.some(keyword => normalizedInput.includes(keyword));

    if (containsKeyword) {
        const responses = [
            "Je crois qu'elle s'appelle Charifia",
            "Ta meilleure amie Chacha.",
            "C'est celles qui se surnomme Mika Mika sur Insta.",
        ];
        return responses[Math.floor(Math.random() * responses.length)]; // Renvoie une réponse aléatoire
    }
    return null; // Pas reconnu
}
// Fonction pour reconnaître les remerciements
function remerciement(input) {
    const remerciements = [
      "merci", "merci beaucoup", "thanks", "thank you", "ty",  "merci infiniment", 
      "mille mercis", 
      "je te remercie", 
      "un grand merci", 
      "je t'en suis reconnaissant(e)", 
      "t'es un ange", 
      "c'est super sympa", 
      "je te dois beaucoup", 
      "tu m'as sauvé", 
      "merci du fond du cœur", 
      "vraiment merci", 
      "c'est vraiment gentil", 
      "merci pour tout", 
      "merci bien", 
      "c'est top", 
      "apprécié", 
      "j'apprécie beaucoup", 
      "thanks"
    ];
    const regex = new RegExp(`\\b(${remerciements.join('|')})\\b`, 'i');

    if (regex.test(input)) {
        const responses = [
            "Je t'en prie !",
    "Avec plaisir !",
    "Content(e) de pouvoir aider !",
    "Pas de souci !",
    "C’est normal !",
    "Ça me fait plaisir !",
    "À ton service !",
    "Toujours là pour toi !",
    "Ça me touche, merci à toi aussi !",
    "Je suis heureux(se) d'avoir pu t'aider !",
    "C'était un plaisir !",
    "Pas de quoi !",
    "N'hésite pas si tu as besoin de plus !",
    "Je suis là pour ça !",
    "C'est la moindre des choses !",
    "Merci à toi aussi !",
    "Ça m'encourage ! Merci !",
    "Ravi(e) de t'avoir été utile !",
    "Tout le plaisir est pour moi !",
    "C'est gentil de le dire !",
    "Je suis là pour toi !",
    "Content(e) de pouvoir rendre service !",
    "Ce n'est rien !",
    "À ta disposition !",
    "Merci de ta reconnaissance !",
    "Heureux(se) d'avoir pu t'aider !",
    "C’est avec plaisir !",
    "Ça me fait chaud au cœur !",
    "Je suis là pour ça !",
    "Toujours prêt(e) à t’aider !",
    "Merci pour ta gentillesse !"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return null; // Pas de remerciement reconnu
}
// Fonction pour reconnaître les au revoir
function aurevoir(input) {
    const aurevoirs = [
      "au revoir", "bye", "à bientôt", "adieu", "ciao", "à la prochaine", 
      "bonne soirée", "bonne nuit", "bonne journée", "see you", "see ya", 
      "à plus", "à plus tard", "farewell", "take care", "à demain"
    ];
    const regex = new RegExp(`\\b(${aurevoirs.join('|')})\\b`, 'i');

    if (regex.test(input)) {
        const responses = [
            "À bientôt !",
            "Au revoir !",
            "Prends soin de toi !",
            "À la prochaine !",
            "Ravi(e) d'avoir pu t'aider, au revoir !",
            "Passe une bonne journée !",
            "À plus tard !",
            "Bon courage pour la suite !",
            "Au plaisir de te revoir !",
            "Bonne soirée !",
            "À très vite !",
            "On se retrouve bientôt !",
            "Bonne continuation !",
            "Porte-toi bien !",
            "Adieu et bonne chance !",
            "À demain !",
            "À très bientôt !",
            "Bye bye !"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return null; // Pas de message d'au revoir reconnu
}
// Fonction pour reconnaître les demandes d'aide
function recognizeHelpRequest(input) {
    const helpRequests = [
        "aide", "assistance", "aidez-moi", "j'ai besoin d'aide", "peux-tu m'aider", 
        "besoin d'assistance", "help", "aidez", "aide-moi", "s'il te plaît", 
        "svp", "je suis perdu", "j'ai un problème", "j'ai une question", 
        "pouvez-vous m'aider", "j'ai besoin de conseils", "besoin d'un coup de main", 
        "j'ai besoin de ton aide", "à l'aide", "je ne comprends pas", 
        "explique-moi", "aider", "besoin d'explications", "aide-moi s'il te plaît","aide-moi","aide moi"
    ];
    const regex = new RegExp(`\\b(${helpRequests.join('|')})\\b`, 'i');

    if (regex.test(input)) {
        const responses = [
            "Bien sûr ! Comment puis-je t'aider ?",
            "Je suis là pour t'aider. Dis-moi ce dont tu as besoin.",
            "Besoin d'aide ? Je suis prêt à te donner un coup de main !",
            "Pas de souci, je suis là pour t'assister.",
            "Dis-moi tout, je suis là pour t'aider.",
            "Explique-moi ton problème, et on va trouver une solution ensemble.",
            "Je peux t'aider avec ça. Que veux-tu savoir ?",
            "Pas de panique, je vais t'aider.",
            "Je suis là pour ça ! Quelle est ta question ?",
            "Dis-moi ce qui te pose problème, je suis prêt à aider."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return null; // Pas de demande d'aide reconnue
}
// Fonction pour répondre aux questions sur Pheraxie ou sur l'IA en général
function recognizePheraxieQuestion(input) {
    const pheraxieQuestions = [
        "qui est Pheraxie", "c'est quoi Pheraxie", "parle-moi de Pheraxie", 
        "qu'est-ce que Pheraxie", "peux-tu me dire qui est Pheraxie", 
        "qui est-ce Pheraxie", "que fait Pheraxie", "qu'est-ce que fait Pheraxie", 
        "explique Pheraxie", "qui est ce Pheraxie", "Pheraxie, c'est qui",
        "qui es-tu", "tu es qui", "qu'est-ce que tu sais faire", 
        "que sais-tu faire", "quel est ton rôle", "parle-moi de toi", 
        "t'es qui", "à quoi sers-tu", "c'est quoi ton but", "qu'est-ce que tu fais"
    ];
    const regex = new RegExp(`\\b(${pheraxieQuestions.join('|')})\\b`, 'i');

    if (regex.test(input)) {
        const responses = [
            "Je suis Pheraxie, un assistant intelligent conçu pour t'aider avec tes projets et répondre à tes questions.",
            "Pheraxie, c'est moi ! Je suis ici pour te guider, t'assister et rendre tes expériences plus agréables.",
            "Je suis là pour t'aider, que ce soit pour répondre à tes questions ou t'accompagner dans tes projets.",
            "Pheraxie est un petit robot intelligent conçu pour offrir de l'assistance sur diverses tâches.",
            "Je suis ton assistant Pheraxie, prêt à t'aider à chaque étape de ton parcours !",
            "Mon rôle est de te guider et te fournir des informations ou conseils selon tes besoins.",
            "Je suis Pheraxie, toujours là pour répondre à tes questions et te donner un coup de main.",
            "Je suis un assistant virtuel. Dis-moi en quoi je peux t'aider !",
            "Je suis Pheraxie, ton allié dans tes projets et tes recherches d'information !",
            "Je suis ici pour t'accompagner et te simplifier la vie dans ce que tu entreprends."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return null; // Pas de question sur Pheraxie ou l'IA reconnue
}

function zavatra(input) {
    // Liste des mots clés pour lesquels la réponse doit être donnée
    const sujet = ["rois", "royaume"];

    // Créer une expression régulière pour détecter "roi" dans n'importe quel endroit du texte
    const regex = new RegExp(`\\b(${sujet.join('|')})\\b`, 'i');

    // Vérifie si l'input contient le mot "roi" (de manière insensible à la casse)
    if (regex.test(input)) {
        // Si "roi" est détecté, renvoyer une réponse détaillée
        const response = [
        ("Les Rois de Madagascar: Andrianampoinimerina (1787-1810), Radama I (1810-1828), Ranavalona I (1828-1861), Radama II (1861-1863), Rasoherina (1863-1868), Ranavalona II (1868-1883), Ranavalona III (1883-1897).")
        ];
        
        return response;
    }

    // Si "roi" n'est pas dans l'input, ne rien répondre
    return null;
}

function fad(input) {
    // Liste des mots clés pour lesquels la réponse doit être donnée
    const fady = ["fady"];

    // Créer une expression régulière pour détecter "roi" dans n'importe quel endroit du texte
    const regex = new RegExp(`\\b(${fady.join('|')})\\b`, 'i');

    // Vérifie si l'input contient le mot "roi" (de manière insensible à la casse)
    if (regex.test(input)) {
        // Si "roi" est détecté, renvoyer une réponse détaillée
        const response = [
            "Les <<fady>> sont des interdits culturels ou spirituels qui varient d'une région à l'autre. Par exemple, il peut être interdit de pointer du doigt une tombe, de manger certains animaux, ou de travailler un jour particulier. Ces tabous sont pris très au sérieux et reflètent le respect de traditions ancestrales."
        ];
        
        return response;
    }

    // Si "roi" n'est pas dans l'input, ne rien répondre
    return null;
}
function eth(input) {
    // Liste des mots clés pour lesquels la réponse doit être donnée
    const ethnie = ["éthnies"];

    // Créer une expression régulière pour détecter "roi" dans n'importe quel endroit du texte
    const regex = new RegExp(`\\b(${ethnie.join('|')})\\b`, 'i');

    // Vérifie si l'input contient le mot "roi" (de manière insensible à la casse)
    if (regex.test(input)) {
        // Si "roi" est détecté, renvoyer une réponse détaillée
        const response = [
            "Les 18 éthnies de Madagascar:Antaifasy, Antaimoro, Antaisaka, Antakarana, Antambahoaka, Antandroy, Antanosy, Bara, Betsileo, Betsimisaraka, Bezanozano, Mahafaly, Merina, Sakalava, Sihanaka, Tanala, Tsimihety, Vezo."
        ];
        
        return response;
    }

    // Si "roi" n'est pas dans l'input, ne rien répondre
    return null;
}
