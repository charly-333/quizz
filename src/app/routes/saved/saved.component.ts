import { Component, OnInit } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faSmile } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {

  faSmile = faSmile;

  constructor() { }

  ngOnInit() {
  }

}
