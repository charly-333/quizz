import { Injectable } from '@angular/core';
import { Quizz } from './quizz';
import { Question } from './quizz';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  current: Quizz;

  constructor() {
    const str = localStorage.getItem('current');
    if (!str) {
      return;
    }
    const q = JSON.parse(str);
    q.__proto__ = Quizz.prototype;
    this.current = q;
  }

  createCurrent(name: string) {
    this.current = new Quizz(name);
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  addQuestion(question: Question) {
    this.current.questions.push(question);
  }
}
