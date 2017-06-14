import { QuestionModel } from './question.model';
import { QUESTIONS } from './mock-questions';

export class QuestionService {
    private dataStore = {
        questions: []
    };

    constructor() {
        this.dataStore.questions = QUESTIONS;
    }

    getQuestions() {
        return this.dataStore.questions;
    }

}
