
// création de la carte

class Card {

    constructor(Title, Question, Answer, Modify, Delete){
        
        // primary property
        this.Title = Title;
        this.Question = Question;
        this.Answer = Answer;
        this.Modify = Modify;
        this.Delete = Delete;
        
        // DOM elements
        this.ElementSection = document.createElement('section');
        this.ElementArticle = document.createElement('article');
        this.ElementTitle = document.createElement('h2');        
        this.ElementQuestion = document.createElement('p')
        this.ElementAnswer = document.createElement('p');
        this.ElementModify = document.createElement('a');
        this.ElementDelete = document.createElement('a');
                
    }

    //methods
    drawCard(){
        
        // creation Title textNode
        let textTitle = document.createTextNode(this.Title);
        // creation Question textNode
        let textQuestion = document.createTextNode(this.Question);
        // creation Answer textNode
        let textAnswer = document.createTextNode(this.Answer);
        // creation Modify textNode
        let textModify = document.createTextNode(this.Modify);
        // creation Delete textNode
        let texDelete = document.createTextNode(this.Delete);


        // child affectation n°1
        this.ElementTitle.appendChild(textTitle);
        this.ElementQuestion.appendChild(textQuestion);
        this.ElementAnswer.appendChild(textAnswer);
        this.ElementModify.appendChild(textModify);
        this.ElementDelete.appendChild(texDelete);

        // child affection n°2
        this.ElementArticle.appendChild(this.ElementTitle);
        this.ElementArticle.appendChild(this.ElementQuestion);
        this.ElementArticle.appendChild(this.ElementAnswer);
        this.ElementArticle.appendChild(this.ElementModify);
        this.ElementArticle.appendChild(this.ElementDelete);


        // child afectation n°3
        document.getElementById('Card').appendChild(this.ElementArticle);
        document.getElementById('Array').appendChild(this.ElementSection);

    }

}