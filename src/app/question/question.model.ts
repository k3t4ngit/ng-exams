export class Option {
        id: number;
        question_id: number;
        description: string[];
}
export class QuestionModel {
        id: number;
        title: string[];
        options_title: string[];
        course_id: number;
        course_name: string;
        description: string[];
        options: Option[];
        answer: number;
}
