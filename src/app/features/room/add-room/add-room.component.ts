import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs';
import { Room, RoomService } from '../services/room.service';

export enum ActionType {
  Update,
  Create,
}

export interface UpsertDialogData {
  type: ActionType;
  room?: Room;
}

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
})
export class AddRoomComponent {
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
