import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomService } from './services/room.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoomItemComponent } from './room-item/room-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddRoomComponent,
    RoomListComponent,
    RoomDetailComponent,
    RoomItemComponent,
  ],
  imports: [CommonModule, SharedModule],
  providers: [RoomService],
  exports: [AddRoomComponent, RoomListComponent]
})
export class RoomModule {}
