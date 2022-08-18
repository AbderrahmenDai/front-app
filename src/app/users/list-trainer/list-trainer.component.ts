import { User } from './../../models/user.interface';

import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

import { AddTrainerComponent } from './../add-trainer/add-trainer.component';
import { ActionType } from 'src/app/room/add-room/add-room.component';

//  _id: string;
//   username: string;
//   password: string;
//   email: string;


@Component({
  selector: 'app-list-trainer',
  templateUrl: './list-trainer.component.html',
  styleUrls: ['./list-trainer.component.css'],
})
export class ListTrainerComponent implements OnInit {
  trainer: User[] = [
    { _id: "21561", username: "azert", password: 'string1', email: "azert@gmail.com"},
    { _id: "12652", username: 'dai', password: 'string2', email: "dai@gmail.com"},
    { _id: "4645", username: 'inf', password: 'string1', email: "inf@gmail.com"},
    { _id: "4645", username: 'abdou', password: 'string1', email: "abdou@gmail.com" },
    { _id: "4645", username: 'za', password: 'string1', email: "za@gmail.com"},
  ];
  
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openCreateDialog() {
    const dialog = this.dialog.open(AddTrainerComponent, {
      data: {
        type: ActionType.Create,
      },
    });
  }
}
