import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizzService } from './quizz.service';
import { environment } from 'src/environments/environment';
import { Quizz } from './quizz';

@Injectable({
  providedIn: 'root'
})

// QuizzHttpService herite de QuizzService
export class QuizzHttpService extends QuizzService {

  constructor(private http: HttpClient) {
    super(); // appel le constructeur du parent
    this.http.get(environment.serverUrl).subscribe({
      next: data => {
        console.log('synch successfull get');
        // tslint:disable-next-line: forin
        for (const name in data) {
          data[name].__proto__ = Quizz.prototype;
        }
        this.list = data;
        localStorage.setItem('list', JSON.stringify(this.list));
      },
      error: e => {
        window.alert('synchro non fonctionnelle: mode degrade actif');
      }
    });

  }

  saveCurrent() {
    super.saveCurrent();
    this.http.post(environment.serverUrl, this.list).subscribe({
      next: () => console.log('synch successfull'),
      error: e => console.error('synch failed', e),
    });
  }


}
