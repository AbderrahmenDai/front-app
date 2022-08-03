import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { forkJoin, Subject, take, takeUntil, tap } from 'rxjs';
import { ActionType, AddRoomComponent } from '../add-room/add-room.component';
import { Room, RoomService } from '../services/room.service';

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

  constructor(private roomService: RoomService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loading = true;

    const process = () => (this.loading = false);

    forkJoin({
      userRooms: this.roomService.getUserRooms().pipe(take(1)),
      memberRooms: this.roomService.getRoomsByMember().pipe(take(1)),
    })
      .pipe(tap(process, process))
      .subscribe(({ userRooms, memberRooms }) => {
        this.userRooms = userRooms;
        this.memberRooms = memberRooms;
      });

    // this.authService.user$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(user => (this.user = user));
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
