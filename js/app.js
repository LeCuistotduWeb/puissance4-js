let joueurEnCours = 1;
let tour = document.querySelector('#tour');
let winner = document.querySelector('#winner');
let gameContainer = document.querySelector('#gameContainer');
let joueur1PointsElt = document.querySelector('#j1Points');
let joueur2PointsElt = document.querySelector('#j2Points');
let nbGameVal = document.querySelector('#nbGameVal');
let finJeu = false;
let joueur1Points = 0;
let joueur2Points = 0;
let nbPartie = 0;
let isIAOn = false

commencerPartie()



//*********************/
// tests TODO remove or comment after developpement
//*********************/

// placeForTest(0)
// placeForTest(1)
// placeForTest(2)
// placeForTest(4)
// placeForTest(3)
// placeForTest(3)
// placeForTest(4)
// placeForTest(3)
// placeForTest(4)
// placeForTest(4)

// placeForTest(0)
// placeForTest(0)
// placeForTest(1)
// placeForTest(1)

// placeForTest(5)
// placeForTest(6)
// placeForTest(4)
// placeForTest(5)
// placeForTest(4)
// placeForTest(4)
// placeForTest(3)
// placeForTest(3)
// placeForTest(1)
// placeForTest(3)

// function placeForTest(c){
//     jouerCase(c)
// }
//*********************/


/**
 * Permet de commencer une partie
 */
function commencerPartie(){
    finJeu = false;
    jeu.initialisation();
    jeu.afficherPuissance4();
    tour.innerHTML = "Au joueur 1 de jouer"
    joueur1PointsElt.innerHTML = joueur1Points
    joueur2PointsElt.innerHTML = joueur2Points
    nbGameVal.innerHTML = nbPartie;
}

/**
 * Permet de choisir le caracter du joueur à afficher
 * @param {*} joueur 
 */
function choixCaractere(joueur) {
    var txt = `veuillez choisir le caractère du joueur ${joueur} :`
    return utils.saisiString(txt)
}

/**
 * Fonction permettant à un joueur de jouer une case
 * return true si joueur a gagné
 * @param {Number} joueur 
 */
function jouerCase(colonne) {
    if(!finJeu){
        let ligneVide = jeu.retournerLigneCaseVideColonne(colonne);
        if (ligneVide !== -1) {
            jeu.jouerCase(joueurEnCours, ligneVide, colonne);
            jeu.afficherPuissance4();
            if (jeu.verificationFinJeu(joueurEnCours)) {
                gererFinJeu()
            }

            if (joueurEnCours === 1) {
                joueurEnCours = 2;
                tour.innerHTML = "Au joueur 2 de jouer";
            } else {
                joueurEnCours = 1;
                tour.innerHTML = "Au joueur 1 de jouer"
            }
        }
    }
}

/**
 * Gère la fin du jeu un fois qu'un joueur a gagné
 */
function gererFinJeu() {
    finJeu = true
    
    if (joueurEnCours === 1) {
        joueur1Points++;
        joueur1PointsElt.innerHTML = joueur1Points;
    } else {
        joueur2Points++;
        joueur2PointsElt.innerHTML = joueur2Points;
    }

   

    winner.innerHTML = "👑 le joueur " + joueurEnCours + " a  gangé 👑";
    nbGameVal.innerHTML = nbPartie;
    tour.style.display = 'none';

    addRestartGameButton();
    
    if(nbPartie === 0) {
        addResetGameButton();
    }

    nbPartie++
}

/**
 * Permet d'ajouter un bouton qui recommence un partie au clique
 */
function addRestartGameButton() {
    const buttonRestartGame = document.createElement('button');
    buttonRestartGame.classList.add('btn-restart');
    buttonRestartGame.classList.add('btn');
    buttonRestartGame.innerHTML = 'Commencer une nouvelle partie';
    document.body.appendChild(buttonRestartGame);

    buttonRestartGame.addEventListener('click', function(){
        restartGame();
    })
}

/**
 * Permet de recommencer un partie
 */
function restartGame(){
    const buttonRestartGame = document.querySelector('.btn-restart');
    winner.innerHTML = "";
    commencerPartie();
    buttonRestartGame.removeEventListener('click', function () {})
    document.body.removeChild(buttonRestartGame);
    tour.style.display = 'block';
    joueurEnCours = 1;
}


/**
 * Permet d'ajouter un bouton qui reset les points des joueurs au clique
 */
function addResetGameButton() {
    const joueurPointsInfos = document.querySelector('#joueurPointsInfos')
    const buttonResetGame = document.createElement('button');
    buttonResetGame.classList.add('btn-reset');
    buttonResetGame.innerHTML = 'reset';
    joueurPointsInfos.appendChild(buttonResetGame);

    buttonResetGame.addEventListener('click', function () {
        resetGame();
    })
}

/**
 * Permet de reset les points des joueurs
 */
function resetGame() {
    if (confirm('Voulez vous vraimment remettre à zero les points ?')){
        const buttonResetGame = document.querySelector('.btn-reset');
        joueur1Points = 0;
        joueur2Points = 0;
        restartGame()
    }
}

function startIa(){
    isIAOn = !isIAOn
    if(isIAOn){

    }
}

function jouer(colonne){
    jouerCase(colonne);
    if(isIAOn){
        colonneIA = IA.choixColonne();
        jouerCase(colonneIA);
    }
}
