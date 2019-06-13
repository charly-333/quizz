import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';
import { CreateComponent } from './routes/create/create.component';
import { LegalComponent } from './routes/legal/legal.component';
import { SetupComponent } from './routes/setup/setup.component';
import { AddQuestionComponent } from './routes/add-question/add-question.component';
import { SavedComponent } from './routes/saved/saved.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuizzComponent } from './routes/quizz/quizz.component';
import { QuestionComponent } from './routes/question/question.component';
import { ScoreComponent } from './routes/score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    LegalComponent,
    SetupComponent,
    AddQuestionComponent,
    SavedComponent,
    QuizzComponent,
    QuestionComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
