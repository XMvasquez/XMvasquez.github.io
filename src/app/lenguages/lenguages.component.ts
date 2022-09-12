import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenguages',
  templateUrl: './lenguages.component.html',
  styleUrls: ['./lenguages.component.css'],
})
export class LenguagesComponent implements OnInit {
  languages: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let lan1 = 'English';
    let lan2 = 'French';
    let lan3 = 'Korean';

    this.languages.push(lan1);
    this.languages.push(lan2);
    this.languages.push(lan3);
  }
}
