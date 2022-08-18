
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs'

/**
** imports fils
 */
import { User } from './../../models/user.interface';
import { Room } from 'src/app/models/room.interface';
import { RoomService } from 'src/app/services/room.service';

export enum ActionType {
  Update,
  Create,
}

export interface UpsertDialogData {
  type: ActionType;
  room?: Room;
  trainer?: User;
}

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
})
export class AddRoomComponent implements OnInit {
 
  type: ActionType;
  upsertForm = this.formBuilder.group({
    title: '',
    isPublic: false,
  });

 room: Room | undefined;

  ActionType = ActionType;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: UpsertDialogData,
    private roomService: RoomService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddRoomComponent>
  ) {
    this.type = data.type;

    this.upsertForm.patchValue({
      ...this.room,
    });
  }

  ngOnInit(): void {}

  submit() {
    const roomInput = this.upsertForm.value;

    let request = this.roomService.createRoom(roomInput);

    request.pipe(take(1)).subscribe((room) =>
      this.dialogRef.close({
        ...room,
        title: roomInput.title,
        isPublic: roomInput.isPublic,
      })
    );
  }
}
