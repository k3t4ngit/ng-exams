//Angular 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Third party
import { CarouselModule } from 'primeng/primeng';
import { ProgressBarModule } from 'primeng/primeng';


// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExamComponent } from './exam/exam.component';
import { ResultComponent } from './result/result.component';
import { QuestionComponent } from './question/question.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
        declarations: [
                AppComponent,
                ExamComponent,
                ResultComponent,
                QuestionComponent,
                PageNotFoundComponent
        ],
        imports: [
                BrowserModule,
                FormsModule,
                CarouselModule,
                ProgressBarModule,
                AppRoutingModule
        ],
        providers: [],
        bootstrap: [AppComponent]
})
export class AppModule { }
