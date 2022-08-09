import { Component, OnInit } from '@angular/core';

export interface Mumber {
  name: string;
  password: string;
  score: number;
}

@Component({
  selector: 'app-online-player',
  templateUrl: './online-player.component.html',
  styleUrls: ['./online-player.component.css'],
})
export class OnlinePlayerComponent implements OnInit {
  mumber: Mumber[] = [
    { score: 2, name: 'ab', password: 'string1' },
    { score: 0, name: 'dai', password: 'string2' },
    { score: 4, name: 'inf', password: 'string1' },
    { score: 4, name: 'abdou', password: 'string1' },
    { score: 4, name: 'za', password: 'string1' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
