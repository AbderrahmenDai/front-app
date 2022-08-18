import { take } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

import { ActionType, UpsertDialogData } from './../../room/add-room/add-room.component';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.interface';



@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.css'],
})
export class AddTrainerComponent implements OnInit {
  type: ActionType;
  upsertForm = this.formBuilder.group({
    title: '',
    isPublic: false,
  });

  user: User | undefined;

  ActionType = ActionType;
  constructor(
    @Inject(MAT_DIALOG_DATA) data: UpsertDialogData,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddTrainerComponent>
  ) {
    this.type = data.type;

    this.upsertForm.patchValue({
      ...this.user,
    });
  }

  ngOnInit(): void {}

  submit() {
    const userInput = this.upsertForm.value;
  }
}
