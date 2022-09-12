import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'],
})
export class CertificatesComponent implements OnInit {
  achievements: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let achievement1 = {
      title: 'IEE Honorary Membership(2015)',
      description:
        "Given to people who have rendered meritorious service to humanity in the IEEE's designated fields of interest. ",
    };

    let achievement2 = {
      title: 'FAI Gold Space Medal(2010)',
      description:
        'One of the highest honors in the aerospace industry, shared with prominent personalities like Neil Armstrong and John Glenn.',
    };

    let achievement3 = {
      title:
        'Honorary doctorate (DUniv) in Aerospace Engineering from the University of Surrey',
      description: '',
    };

    let achievement4 = {
      title:
        'Honorary doctorate of Engineering and Technology from Yale University',
      description: '',
    };

    this.achievements.push(achievement1);
    this.achievements.push(achievement2);
    this.achievements.push(achievement3);
    this.achievements.push(achievement4);
  }
}
