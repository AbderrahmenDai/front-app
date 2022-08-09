import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/table';

export interface Player {
  Username: string;
  Password: string;
  Score: number;
}

const ELEMENT_DATA: Player[] = [
  { Username: 'Hydrogen', Password: "1.0079", Score: 5 },
  { Username: 'Helium', Password:" 4.0026", Score: 2 },
  { Username: 'Lithium', Password:" 6.941", Score: 2 },
  { Username: 'Beryllium', Password: "9.012", Score: 2 },
  { Username: 'Boron', Password: "10.811", Score: 2},
  { Username: 'Carbon', Password: "12.0107", Score: 2},
  
];

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
})
export class PlayerListComponent {
  displayedColumns: string[] = ['Username', 'Password', 'Score'];
  DataSource = ELEMENT_DATA;
}
