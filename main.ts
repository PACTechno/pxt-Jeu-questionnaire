/**
 * Extension qui permet de gérer des questions et réponses
 * dans Makecode Arcade
 */


enum QuestionTypes {
    //% block="vrai ou faux"
    trueFalse = 0,
    //% block="choix multiples"
    multipleChoice = 1,
    //% block="réponse courte"
    shortAnswer = 2
}


//% weight=50 color=#ff00ff icon=f059
namespace questionsReponses {

    export class Question {
        _type: QuestionTypes;

        txt_question: string;
        
        txt_good:   string;
        txt_bad:    string[];
        trueFalse:  boolean;

        /**
         * Funtion to ask a question
         */






    }
    

    /**
     * Create a new question of type True/False
     * @param qText     Text of the question
     * @param qAns      Answer to the question (true/false)
     */
    
    //% block="Question : %text| Réponse : %answer"
    export function addTrueFalse(qText: string, qAns: boolean): Question {
        let question = new Question();
        question._type = QuestionTypes.trueFalse;

        question.txt_question = qText;
        question.txt_bad = [];
        question.txt_good = "";
        question.trueFalse = qAns;
        return question;
    }
    



}