import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamComponent }  from './exam/exam.component';
import { ResultComponent }  from './result/result.component';
import { QuestionComponent }  from './question/question.component';
import { PageNotFoundComponent }    from './page-not-found.component';

const appRoutes: Routes = [
    {
	path: 'exams',
	component: ExamComponent
    },
    {
    	path: 'question',
    	component: QuestionComponent
    },
    {
	path: 'results',
	component: ResultComponent
    },
    { path: '',   redirectTo: '/exams', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
	RouterModule.forRoot(
	    appRoutes
	)
    ],
    exports: [
	RouterModule
    ],
    
})
export class AppRoutingModule { }
