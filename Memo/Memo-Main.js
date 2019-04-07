
// Immediatly Invoked Function Expression
(function(){
    console.log('Main');

    // réccupération de l'event click
    let button_addArray = document.getElementById('add-array');
    console.log('"Add a new Array" déclaré');
    
    // déclaration de la fonction du clique
    button_addArray.onclick = function(){
        
        // vérification du clique
        console.log('clique sur "Add a new Array"');
    
        // création d'une instance de Array
        let Tableau = new Array();
        console.log('dessine le tableau');
        
        //affichage du Tableau
        Tableau.drawArray();
    };
})();

// Immediatly Invoked Function Expression
(function(){

    // réccupération de l'event click
    let button_addCard = document.getElementById('add-card');
    console.log('"Add a new Card" déclaré');
    
    // déclaration de la fonction du clique
    button_addCard.onclick = function(){
        
        // vérification du clique
        console.log('clique sur "Add a new Card"');
    
        // création d'une instance de Card
        let Carte = new Card('Title', 'Question', 'Answer', 'Modify', 'Delete');
        console.log('dessine la carte');
        
        //affichage de la carte
        Carte.drawCard();
    };
})();
