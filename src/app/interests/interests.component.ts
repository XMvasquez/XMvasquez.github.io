import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
})
export class InterestsComponent implements OnInit {
  interests: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let interest1 = 'Literatura';
    let interest2 = 'Fotografia';
    let interest3 = 'Dibujo Industrial';
    let interest4 = 'Filantropia';
    let interest5 = 'Biologia';
    let interest6 = 'Danza';

    this.interests.push(
      interest1,
      interest2,
      interest3,
      interest4,
      interest5,
      interest6
    );
  }
}
