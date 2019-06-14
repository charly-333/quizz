import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizzService } from './quizz.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

// QuizzHttpService herite de QuizzService
export class QuizzHttpService extends QuizzService {

  constructor(private http: HttpClient) {
    super(); //appel le constructeur du parent
  }

  saveCurrent() {
    super.saveCurrent();
    this.http.post(environment.serverUrl, this.list).subscribe({
      next: () => console.log('synch successfull'),
      error: e => console.error('synch failed', e),
    });

  }
}
