import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSmile, faSave } from '@fortawesome/free-regular-svg-icons';
import { faFileArchive } from '@fortawesome/free-solid-svg-icons';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {

  //faSmile = faBuffer;
  faSmile = faSave;
  // faSmile = faSmile;
  // faSmile = faFileArchive;

  constructor() { }

  ngOnInit() {
  }

}
