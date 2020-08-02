let utils = {
    
    /**
     * Permet de poser une question
     * @param {*} txt 
     */
    //saisiString: function(txt) {
    //  return readline.question(txt)
    //},

    /**
     * permet d'initialiser un tableau en fonction d'un nombre de ligne et de colonnes
     * @param {Number} nbLigne 
     * @param {Number} nbColonne 
     * @param {*} car 
     */
    initialiserTableau: function (nbLigne, nbColonne, car = '') {
        let tab = [];
        for (let i = 0; i < nbLigne; i++) {
            let ligne = []
            for (let j = 0; j < nbColonne; j++) {
                ligne.push(car);
            }
            tab.push(ligne)
        }

        return tab
    },
}