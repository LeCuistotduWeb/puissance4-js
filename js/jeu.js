const jeu = {
    puissance4: [],
    nbColonne: 7,
    nbLigne: 6,

    joueur1car: 'x',
    joueur2car: 'o',
    

    /**
     * init puissance 4
     */
    initialisation: function(){
        return this.puissance4 = utils.initialiserTableau(this.nbLigne, this.nbColonne, 0)
    },

    /**
     * Permet d'afficher un tableau de puissance 4
     */
    afficherPuissance4: function () {
        const jeu = document.querySelector('#jeu');
        jeu.innerHTML = '';

        var content = '<table>';
        for (let i = 0; i < this.nbLigne; i++) {
            content += '<tr>'
            for (let j = 0; j < this.nbColonne; j++) {
                content += '<td>'
                if (this.puissance4[i][j] === 0) {
                    content += ''
                } else if (this.puissance4[i][j] === 1) {
                    content += '<span class="pionJ1"></span>'
                } else if (this.puissance4[i][j] === 2) {
                    content += '<span class="pionJ2"></span>'
                }
                content += '</td>'
            }
            content += '</tr>'
        }

        content += '<tr class="row-buttons">'
        for (let j = 0; j < this.nbColonne; j++) {
            content += '<td><button type="button" class="btn btn-select" onclick="jouer('+ (j) +')">jouer</button></td>'
        }
        content += '</tr>'

        content += '<table>';

        jeu.innerHTML = content;
    },

    /**
     * 
     * @param {*} joueur 
     * @param {*} ligneVide 
     * @param {*} colonne 
     */
    jouerCase: function (joueur, ligne, colonne) {
        this.puissance4[ligne][colonne] = joueur
    },

    /**
     * Permet de retourner la premiere ligne vide d'une colonne
     * return -1 si la colonne est pleine
     * @param {*} colonne 
     */
    retournerLigneCaseVideColonne: function(colonne) {
        for (var i = this.nbLigne - 1; i >= 0; i--) {
            if (this.verifCaseVide(i, colonne)) return i;
        }
        return -1;
    },

    /**
     * Permet de verifier si une case est vide
     * return true si la case est vide
     * @param {*} ligne 
     * @param {*} colonne 
     */
    verifCaseVide: function(ligne, colonne) {
        return this.puissance4[ligne][colonne] === 0;
    },

    /**
     * Permet de saisir une colonne
     */
    saisirColonne: function() {
        return parseInt(utils.saisiString('quelle colonne ?'))
    },

    /**
     * Fonction permettant de verifier si un joueuer a gagné
     * @param {*} joueur 
     */
    verificationFinJeu: function(joueur) {
        if (this.verificationLigneFinJeu(joueur) || this.verificationColonneFinJeu(joueur) || this.verificationDiagonaleFinJeu(joueur)) {
            return true
        }
        return false
    },

    /**
     * Fonction permettant de verifier si un joueur a gagné sur une ligne
     * @param {*} joueur 
     */
    verificationLigneFinJeu: function(joueur) {
        for (let i = this.nbLigne - 1; i >= 0; i--) {
            for (let j = 0; j < this.nbColonne - 3; j++) {
                if (this.puissance4[i][j] === joueur &&
                    this.puissance4[i][j + 1] === joueur &&
                    this.puissance4[i][j + 2] === joueur &&
                    this.puissance4[i][j + 3] === joueur
                ) return true;
            }
        }
        return false
    },

    /**
     * Fonction permettant de verifier si un joueur a gagné sur une colonne
     * @param {*} joueur 
     */
    verificationColonneFinJeu: function(joueur) {
        for (let i = 0; i < this.nbColonne; i++) {
            for (let j = this.nbLigne - 4; j >= 0; j--) {
                if (this.puissance4[j][i] === joueur &&
                    this.puissance4[j + 1][i] === joueur &&
                    this.puissance4[j + 2][i] === joueur &&
                    this.puissance4[j + 3][i] === joueur
                ) return true;

            }
        }
    },

    /**
     * Fonction permettant de verifier si un joueur a gagné sur une diagonale
     * @param {*} joueur 
     */
    verificationDiagonaleFinJeu: function(joueur) {
        for (let i = this.nbLigne - 1; i >= 3; i--) {
            for (let j = 0; j < this.nbColonne; j++) {
                if (this.puissance4[i][j] === joueur &&
                    this.puissance4[i - 1][j + 1] === joueur &&
                    this.puissance4[i - 2][j + 2] === joueur &&
                    this.puissance4[i - 3][j + 3] === joueur
                ) return true;

                if (this.puissance4[i][j] === joueur &&
                    this.puissance4[i - 1][j - 1] === joueur &&
                    this.puissance4[i - 2][j - 2] === joueur &&
                    this.puissance4[i - 3][j - 3] === joueur
                ) return true;
            }
        }
        return false
    },
}