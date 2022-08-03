import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { AddRoomComponent } from './features/room/add-room/add-room.component';
import { RoomListComponent } from './features/room/room-list/room-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'rooms',
    component: RoomListComponent,
  },
  {
    path: 'add-room',
    component: AddRoomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
