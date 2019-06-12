import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  name = 'les capitales européennes';
  nbrQuestion = 0;

  constructor() { }

  ngOnInit() {
  }

}
