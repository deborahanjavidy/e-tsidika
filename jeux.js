// Fonction pour reconnaître les dami
function dami(input) {
    const damis = [
      "cretin","frere","frère","frères","freres"
    ];
    const regex = new RegExp(`\\b(${damis.join('|')})\\b`, 'i');

    if (regex.test(input)) {
        const responses = [
            "Ce sont les fans de super mario caca", "je crois que ce sont David et Michael","Peut etre les super mario crétin","Michachael et Davitsika","Hum ce sont les fans de shadowcrétin"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return null; // Pas de remerciement reconnu
}

// Fonction pour reconnaître les blagues
function blague(input) {
    const blagues = [
      "David","Michael","david","michael"
    ];
    const regex = new RegExp(`\\b(${blagues.join('|')})\\b`, 'i');

    if (regex.test(input)) {
        const responses = [
          "Ce sont les brosGamers","ce sont les 2 clowns de la maison","c'est toi ou ton frère"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return null; // Pas de remerciement reconnu
}

// Fonction pour reconnaître les jeux
function jeux(input) {
    const jeuxs = [
      "Sonic","sonic","mario","Mario","Link", "link"
    ];
    const regex = new RegExp(`\\b(${jeuxs.join('|')})\\b`, 'i');

    if (regex.test(input)) {
        const responses = [
         "c'est pour les débiles ca hein","C'est un jeux superrrr crétins ","c'est maniaimbécile"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return null; // Pas de remerciement reconnu
}
// Fonction pour fournir des informations sur les personnages de jeux
function jeux(input) {
    const personnages = {
        "sonic": [
            "Sonic est un hérisson bleu qui court à une vitesse incroyable pour sauver le monde du Dr. Eggman.",
            "Il est connu pour sa vitesse et son attitude cool.",
            "Sonic est toujours prêt à aider ses amis et à affronter de nouveaux défis."
        ],
        "mario": [
            "Mario est un plombier courageux qui cherche toujours à sauver la princesse Peach des griffes de Bowser.",
            "Il est le héros principal du Royaume Champignon et adore les champignons qui le rendent plus fort.",
            "Avec son frère Luigi, Mario vit de nombreuses aventures."
        ],
        "luigi": [
            "Luigi est le frère de Mario et l'accompagne dans de nombreuses aventures.",
            "Bien qu'un peu peureux, Luigi est courageux et très attaché à son frère.",
            "Luigi est également un excellent plombier et un personnage très aimé des fans."
        ],
        "peach": [
            "La princesse Peach est la souveraine du Royaume Champignon et souvent enlevée par Bowser.",
            "Elle est courageuse et n'hésite pas à se battre aux côtés de Mario quand elle en a l'occasion.",
            "Peach est connue pour sa robe rose et sa couronne."
        ],
        "shadow": [
            "Shadow est un hérisson noir, rival de Sonic, connu pour sa vitesse et ses pouvoirs mystérieux.",
            "Il est souvent solitaire et complexe, parfois allié et parfois opposant de Sonic.",
            "Shadow est l'un des personnages les plus populaires de la série Sonic."
        ]
        // Ajoute d'autres personnages ici
    };

    // Extraire les personnages mentionnés dans la question
    const matchedCharacters = Object.keys(personnages).filter(character => input.includes(character));

    if (matchedCharacters.length > 0) {
        // Générer des réponses pour chaque personnage mentionné
        let responses = matchedCharacters.map(character => {
            const characterResponses = personnages[character];
            return characterResponses[Math.floor(Math.random() * characterResponses.length)];
        });

        return responses.join(" ");
    }
    return null; // Aucun personnage reconnu
}
function recognizeGameCharacter(input) {
    if (input.includes("metal mario")) {
        const responses = [
            "Metal Mario est une version plus robuste de Mario, connu pour sa force et son invincibilité temporaire.",
            "Dans certains jeux, Metal Mario est plus lent mais résistant aux attaques. Une véritable forteresse !",
            "La transformation en Metal Mario est souvent obtenue grâce à un pouvoir spécial. Redoutable, n'est-ce pas ?"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (input.includes("falcon")) {
        const responses = [
            "Captaine Falcon est un pilote de F-Zero, aussi rapide sur le circuit que puissant en combat.",
            "Connu pour son emblématique 'Falcon Punch', Captaine Falcon est un favori des fans de Super Smash Bros.",
            "Avec sa combinaison bleue et sa moto futuriste, Captaine Falcon est prêt à relever tous les défis !"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    
    if (input.includes("pacman")) {
        const responses = [
            "Pac-Man est l'un des personnages les plus emblématiques des jeux d'arcade, avec un appétit sans fin pour les pac-gommes.",
            "Le but de Pac-Man est simple : manger toutes les pac-gommes en évitant les fantômes.",
            "Depuis son apparition en 1980, Pac-Man reste un classique des jeux vidéo avec son gameplay intemporel."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (input.includes("tails")) {
        const responses = [
            "Tails est le fidèle compagnon de Sonic, connu pour ses deux queues qui lui permettent de voler.",
            "Tails est aussi un brillant ingénieur, construisant toutes sortes de machines pour aider Sonic.",
            "Dans les jeux Sonic, Tails est souvent vu comme un personnage joueur deux, un vrai allié de confiance."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (input.includes("megaman")) {
        const responses = [
            "MegaMan, aussi connu sous le nom de Rockman au Japon, est un robot combatif créé pour protéger l'humanité.",
            "Avec chaque boss vaincu, MegaMan gagne une nouvelle arme, lui donnant une grande variété de compétences.",
            "Grâce à sa détermination et son courage, MegaMan est devenu une légende parmi les héros de jeux vidéo."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes("liold")) {
        const responses = [
            "Liold est connu pour sa force et sa capacité à surmonter des défis énormes dans ses aventures.",
            "Son intelligence et son leadership sont admirés par ses alliés, faisant de lui un personnage incontournable.",
            "Avec ses compétences en combat et en stratégie, Liold est redoutable sur le champ de bataille."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    if (input.includes("polygone")) {
        const responses = [
            "Polygone est un personnage unique souvent représenté dans un style angulaire ou géométrique.",
            "Sa particularité réside dans sa capacité à manipuler la géométrie pour créer des obstacles ou des attaques.",
            "Polygone est mystérieux et incarne une esthétique rétro qui rappelle les premiers jeux d'arcade."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    return null;
}
function lol(input) {
    // Quiz de culture générale sur les jeux vidéo
    if (input.includes("quiz") || input.includes("question")) {
        const quizQuestions = [
            "Quel est le nom du célèbre héros de Nintendo en salopette rouge ? Réponse : Mario !",
            "Dans quel jeu peut-on utiliser une arme appelée 'BFG 9000' ? Réponse : DOOM !",
            "Quel est le Pokémon numéro 25 dans le Pokédex ? Réponse : Pikachu !"
        ];
        return quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
    }

    // Blagues sur les jeux vidéo
    if (input.includes("blague") || input.includes("plaisanterie") || input.includes("humour")) {
        const jokes = [
            "Pourquoi Mario déteste-t-il les ascenseurs ? Parce qu'il préfère les niveaux !",
            "Comment appelle-t-on un Pikachu heureux ? Un Pikajoyeux !",
            "Pourquoi Pac-Man est-il mauvais en cache-cache ? Parce qu'il fait toujours 'Waka Waka' !"
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
    }

    // Faits historiques sur les personnages et les jeux
    if (input.includes("histoire") || input.includes("origines") || input.includes("fait historique")) {
        const historyFacts = [
            "Saviez-vous que le jeu 'Space Invaders' a causé une pénurie de pièces de monnaie au Japon en 1978 ?",
            "Le premier jeu vidéo au monde, 'Tennis for Two', a été créé en 1958 par le physicien William Higinbotham.",
            "Le personnage de Sonic the Hedgehog a été conçu pour rivaliser avec Mario de Nintendo en 1991."
        ];
        return historyFacts[Math.floor(Math.random() * historyFacts.length)];
    }

    // Conseils de jeu ou astuces
    if (input.includes("conseil") || input.includes("astuce") || input.includes("truc")) {
        const tips = [
            "Dans Mario Kart, utilisez le dérapage pour accumuler des boosts de vitesse dans les virages serrés.",
            "Dans Minecraft, dormir peut te sauver la vie des créatures de la nuit, alors n’oublie jamais de créer un lit !",
            "Dans Zelda: Breath of the Wild, cuisiner des plats peut te redonner des cœurs et augmenter ta résistance."
        ];
        return tips[Math.floor(Math.random() * tips.length)];
    }

    // Recommandations de jeux basées sur les préférences de l’utilisateur
    if (input.includes("recommandation") || input.includes("jeux") || input.includes("suggestion")) {
        const gameRecommendations = [
            "Si tu aimes les jeux d'aventure, essaie The Legend of Zelda: Breath of the Wild.",
            "Pour les amateurs de mystère et d'énigmes, je recommande Portal 2.",
            "Si tu aimes l'action rapide, teste Devil May Cry 5 ou Bayonetta 2."
        ];
        return gameRecommendations[Math.floor(Math.random() * gameRecommendations.length)];
    }

    // Si aucune des conditions n'est remplie, une réponse générique
    return null;
}
function respondToUser(input) {
    // Présentation de Pheraxie
    if (input.includes("qui es-tu") || input.includes("ton nom") || input.includes("c'est quoi Pheraxie")) {
        const introResponses = [
            "Je suis Pheraxie, ton ami virtuel ! J'ai été créé pour t'aider et m'amuser avec toi.",
            "Mon nom est Pheraxie ! Je suis un assistant intelligent, ici pour répondre à toutes tes questions.",
            "Hello ! Moi, c'est Pheraxie, ton compagnon intelligent créé pour t’aider dans tout ce que tu veux !"
        ];
        return introResponses[Math.floor(Math.random() * introResponses.length)];
    }

    // Créateur de Pheraxie
    if (input.includes("qui t'a créé") || input.includes("ton créateur") || input.includes("d'où tu viens")) {
        const creatorResponses = [
            "C'est Déborah qui m'a créé ! Elle est super cool et a imaginé Pheraxie pour aider tout le monde.",
            "Déborah, ma créatrice, m'a programmé pour être ton assistant. Sympa, non ?",
            "C'est grâce à Déborah que je suis ici. Elle a beaucoup travaillé pour me rendre intelligent et amusant !"
        ];
        return creatorResponses[Math.floor(Math.random() * creatorResponses.length)];
    }

    // Réponse drôle pour "Tu sais quoi ?"
    if (input.includes("tu sais quoi") || input.includes("devine quoi")) {
        const funnyResponses = [
            "Quoi donc ? Je suis tout ouïe !",
            "Hmm, je parie que c'est une surprise ! Dis-moi !",
            "Ooooh, j'adore les devinettes ! C'est quoi ?"
        ];
        return funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
    }

    // Réponse à "Tu peux faire quoi ?"
    if (input.includes("tu peux faire quoi") || input.includes("que sais-tu faire") || input.includes("tes capacités")) {
        const abilitiesResponses = [
            "Je peux répondre à tes questions, jouer à des jeux avec toi, te raconter des blagues et même te parler de mon créateur !",
            "Mes capacités ? Je suis là pour discuter, répondre à tes questions et t’amuser.",
            "Je suis super polyvalent ! On peut discuter, je peux te raconter des histoires et plein d’autres choses !"
        ];
        return abilitiesResponses[Math.floor(Math.random() * abilitiesResponses.length)];
    }

    // Blague
    if (input.includes("blague") || input.includes("raconte-moi une blague")) {
        const jokes = [
            "Pourquoi les plongeurs plongent-ils toujours en arrière et pas en avant ? Parce que sinon ils tombent dans le bateau !",
            "Quel est le comble pour un électricien ? Ne pas être au courant !",
            "Que dit une imprimante dans une soirée ? J’en ai marre des photocopies !"
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
    }

    // Si aucune correspondance trouvée, réponse par défaut
    return null;
}
// Fonction pour répondre quand l'utilisateur dit que l'IA a raison
function respondToCorrect(input) {
    const correctResponses = [
        "Merci de le reconnaître ! Je suis content que tu sois d'accord.",
        "Oui, je pensais que tu le verrais aussi !",
        "Super ! C'est toujours agréable d'avoir raison !",
        "Je suis ravi que tu partages mon point de vue.",
        "Exactement ! C'est ce que j'essaie de dire.",
        "Merci ! Je fais de mon mieux pour être utile.",
        "Je suis heureux que tu sois de mon avis !",
        "Oui, c'est bon de savoir que j'ai raison !",
        "Merci de valider mon idée !"
    ];
    
    const regex = /oui/i; // Regex pour identifier la réponse "oui"

    if (regex.test(input)) {
        return correctResponses[Math.floor(Math.random() * correctResponses.length)];
    }
    return null; // Pas de confirmation reconnue
}

// Fonction pour répondre quand l'utilisateur dit que l'IA a tort
function respondToIncorrect(input) {
    const incorrectResponses = [
        "Oh, je suis désolé ! Que penses-tu à la place ?",
        "Merci de me corriger, je vais essayer de faire mieux !",
        "D'accord, je vois ce que tu veux dire. Que devrais-je penser ?",
        "Ah, je comprends. Peux-tu m'expliquer pourquoi ?",
        "Je suis désolé, j'essaierai de m'améliorer !",
        "Merci de me le faire savoir, je vais réfléchir à ça.",
        "D'accord, je vais apprendre de mes erreurs.",
        "Merci de m'avoir corrigé ! Je vais garder ça en tête.",
        "C'est noté ! Je vais essayer d'être plus précis la prochaine fois."
    ];
    
    const regex = /non/i; // Regex pour identifier la réponse "non"

    if (regex.test(input)) {
        return incorrectResponses[Math.floor(Math.random() * incorrectResponses.length)];
    }
    return null; // Pas de désaccord reconnu
}
// Fonction pour répondre aux questions sur Minou
function recognizeMinouQuestion(input) {
    const minouQuestions = [
        "Minou"
    ];
    const regex = new RegExp(`\\b(${minouQuestions.join('|')})\\b`, 'i');

    if (regex.test(input)) {
        const responses = [
            "Minou est notre adorable chat qui aime jouer et dormir.",
            "C'est un chat très câlin qui apporte de la joie à notre maison.",
            "Minou adore chasser les petites choses et faire la sieste au soleil.",
            "Notre chat, Minou, est un membre de la famille très spécial !",
            "Minou aime explorer et se cacher dans des endroits surprenants."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return null;
}

// Fonction pour répondre aux questions sur Pyjamasques
function recognizePyjamasquesQuestion(input) {
    const pyjamasquesQuestions = [
        "Pyjamasques","pyjamasque"
    ];
    const regex = new RegExp(`\\b(${pyjamasquesQuestions.join('|')})\\b`, 'i');

    if (regex.test(input)) {
        const responses = [
            "Les Pyjamasques sont des super-héros qui combattent le mal la nuit.",
            "Ce sont trois enfants qui se transforment en héros grâce à leurs pyjamas.",
            "Les Pyjamasques, c'est une série animée pleine d'aventures nocturnes !",
            "Ils luttent contre des vilains tout en s'amusant.",
            "Chaque héros a ses propres pouvoirs uniques pour protéger la ville."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return null;
}

// Fonction pour répondre aux questions sur les YouTubers gaming
function recognizeYouTubersGamingQuestion(input) {
    const youtubersQuestions = [
        "YouTuber", "YouTubeur"
    ];
    const regex = new RegExp(`\\b(${youtubersQuestions.join('|')})\\b`, 'i');

    if (regex.test(input)) {
        const responses = [
            "Les YouTubers gaming sont des créateurs de contenu qui jouent à des jeux vidéo.",
            "Ils partagent leurs expériences de jeu avec leurs abonnés.",
            "Parmi eux, on trouve des personnalités comme Squeezie et Gotaga.",
            "Les YouTubers gaming proposent des Let's Play, des tutoriels et des critiques.",
            "Ils divertissent un large public en jouant à des jeux variés."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return null;
}

// Fonction pour répondre aux questions sur Mr. Beast
function recognizeMrBeastQuestion(input) {
    const mrBeastQuestions = [
        " Beast"
    ];
    const regex = new RegExp(`\\b(${mrBeastQuestions.join('|')})\\b`, 'i');

    if (regex.test(input)) {
        const responses = [
            "Mr. Beast est un célèbre YouTuber connu pour ses défis et ses vidéos généreuses.",
            "Il réalise des vidéos où il donne de grosses sommes d'argent à des inconnus.",
            "Ses projets ambitieux, comme construire des maisons, le rendent très populaire.",
            "Mr. Beast aime aussi sensibiliser à des causes importantes, comme l'environnement.",
            "Ses vidéos attirent des millions de vues et il est reconnu pour sa créativité."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return null;
}

// Fonction pour répondre aux questions sur Peppa Pig
function recognizePeppaPigQuestion(input) {
    const peppaQuestions = [
        "Peppa"
    ];
    const regex = new RegExp(`\\b(${peppaQuestions.join('|')})\\b`, 'i');

    if (regex.test(input)) {
        const responses = [
            "Peppa Pig est une petite cochonne qui vit des aventures avec sa famille.",
            "C'est une série animée appréciée des enfants.",
            "Peppa a un petit frère nommé George et des amis divers.",
            "Les histoires de Peppa sont drôles et éducatives pour les jeunes enfants.",
            "Peppa adore sauter dans les flaques de boue et passer du temps avec sa famille."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return null;
}

// Fonction pour répondre aux questions sur C'est pas sorcier
function recognizeCestPasSorcierQuestion(input) {
    const cestPasSorcierQuestions = [
        "sorcier"
    ];
    const regex = new RegExp(`\\b(${cestPasSorcierQuestions.join('|')})\\b`, 'i');

    if (regex.test(input)) {
        const responses = [
            "C'est pas sorcier est une émission éducative française pour enfants.",
            "Les animateurs Fred et Jamy expliquent des sujets scientifiques de manière ludique.",
            "L'émission est connue pour ses expériences et ses reportages.",
            "C'est un excellent moyen d'apprendre tout en s'amusant !",
            "Elle aborde divers thèmes, de la biologie à la géographie."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return null;
}

// Fonction pour répondre aux questions sur Fun6Video
function recognizeFun6VideoQuestion(input) {
    const fun6videoQuestions = [
        "Video"
    ];
    const regex = new RegExp(`\\b(${fun6videoQuestions.join('|')})\\b`, 'i');

    if (regex.test(input)) {
        const responses = [
            "Fun6Video est un site de vidéos gags qui divertit les internautes.",
            "On y trouve des vidéos humoristiques, des blagues et des farces.",
            "C'est un endroit idéal pour passer du temps à rire avec des amis.",
            "Les vidéos sont souvent courtes et très amusantes.",
            "Fun6Video propose une grande variété de contenu comique."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    return null;
}
