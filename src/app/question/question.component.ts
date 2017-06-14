import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { QuestionModel } from './question.model';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    // styleUrls: ['./question.component.css'],
    providers: [QuestionService],
})
export class QuestionComponent implements OnInit {

    questions: QuestionModel[];
    index: number = 0;
    state: string = 'in';
    total_questions: number = 0;
    answered_questions: number = 0;
    answered_questions_percent: number = 0;
    constructor(private questionService: QuestionService) { }

    ngOnInit() {
        this.questions = this.questionService.getQuestions();
        this.total_questions = this.questions.length;
    }
    getAnswered(question, answer) {
        question.answer = answer;
        let answeredQuestions = this.getAnsweredQuestions();
        this.answered_questions = answeredQuestions.length;
        this.answered_questions_percent = (this.answered_questions / this.total_questions) * 100;
    }
    getAnsweredQuestions() {
        //let newquestions = JSON.parse(JSON.stringify(this.questions));
        return this.questions.filter(function(q) {
            return q.answer > 0;
        });
    }
    // ngOnInit() {
    //     this.questions = this.questionService.getQuestions();
    //     this.question = this.questions[this.index]; //cur_question
    //     this.total_questions = this.questions.length;
    // }

    // //navigate
    // showPrev() {
    //     this.index = this.index - 1;
    //     this.question = this.questions[this.index];
    // }
    // showNext() {
    //     this.index = this.index + 1;
    //     this.question = this.questions[this.index];

    // }


}
