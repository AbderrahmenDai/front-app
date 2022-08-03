import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs/operators';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { User } from '../../auth/services/auth.service';
import { Room, RoomService } from '../services/room.service';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css'],
})
export class RoomItemComponent implements OnInit {
  @Input() room: any;
  @Input() user: any;
  @Input() publicRooms: Room[] = [];
  @Input() userRooms: Room[] = [];
  @Input() memberRooms: Room[] = [];

  loading = false;
  isOwner = false;

  get isMember() {
    return this.memberRooms.some((e) => e._id === this.room._id);
  }
  constructor(
    private roomService: RoomService,
    private dialog: MatDialog,
    private clipboard: Clipboard,
    private router: Router
  ) {}

  ngOnInit() {
    this.isOwner =
      this.room.owner === this.user._id ||
      (this.room.owner as User)._id === this.user._id;
  }

  joinRoom() {
    this.loading = true;

    const process = () => (this.loading = false);

    this.roomService
      .getRoom(this.room._id)
      .pipe(take(1), tap(process, process))
      .subscribe(() => this.router.navigate(['/room', this.room._id]));
  }



  leaveRoom() {
    this.loading = true;

    const process = () => (this.loading = false);

    this.roomService
      .leaveRoom(this.room._id)
      .pipe(take(1), tap(process, process));
  }

  isString<T>(value: T) {
    return typeof value === 'string';
  }
}
