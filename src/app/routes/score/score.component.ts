import { Component, OnInit } from '@angular/core';
import { faSmile, faGrinBeamSweat, faGrinTongueSquint } from '@fortawesome/free-regular-svg-icons';
import { faPoo, faGrinHearts } from '@fortawesome/free-solid-svg-icons';
import { QuizzService } from 'src/app/quizz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  icon = faSmile;
  message = 'Bravo !';

  constructor(
    public quizz: QuizzService,

  ) { }

  ngOnInit() {
    if (this.quizz.progress.score <= 0) {
      this.icon = faPoo;
      this.message = 'NUL !';
    } else if (this.quizz.progress.score === this.quizz.current.questions.length) {
      this.icon = faGrinHearts;
      this.message = 'EXCELLENT !';
    } else if (this.quizz.progress.score < (this.quizz.current.questions.length / 2)) {
      // this.icon = faGrinTongueSquint;
      this.icon = faGrinBeamSweat;
      this.message = 'PEU MIEUX FAIRE !';
    }

  }
}
