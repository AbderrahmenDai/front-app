import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, take } from 'rxjs';
import { Room } from 'src/app/models/room.interface';
import { RoomService } from 'src/app/services/room.service';
import { ActionType, AddRoomComponent } from '../add-room/add-room.component';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
})
export class RoomListComponent implements OnInit {
  publicRooms: Room[] = [];
  userRooms: Room[] = [];
  memberRooms: Room[] = [];
  user: any;

  loading = false;

  destroy$ = new Subject();

  constructor(private dialog: MatDialog, private roomService: RoomService) {}

  ngOnInit(): void {
    this.loading = true;
  }

  openCreateDialog() {
    const dialog = this.dialog.open(AddRoomComponent, {
      data: {
        type: ActionType.Create,
      },
    });

    dialog
      .afterClosed()
      .pipe(take(1))
      .subscribe((room: Room) => {
        if (room.isPublic) {
          this.publicRooms.push(room);
        }

        this.userRooms.push(room);
      });
  }
}
