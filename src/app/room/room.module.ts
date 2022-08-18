import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RoomComponent, RoomListComponent, AddRoomComponent],
  imports: [CommonModule, RoomRoutingModule, SharedModule],
})
export class RoomModule {}
