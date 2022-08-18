import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { OnlinePlayerComponent } from './features/player/online-player/online-player.component';
import { PlayerListComponent } from './features/player/player-list/player-list.component';
import { AddRoomComponent } from './features/room/add-room/add-room.component';
import { RoomDetailComponent } from './features/room/room-detail/room-detail.component';
import { RoomListComponent } from './features/room/room-list/room-list.component';
import { AddUserComponent } from './features/user/components/add-user/add-user.component';
import { ListUserComponent } from './features/user/components/list-user/list-user.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  // {
  //   path: 'rooms',
  //   component: RoomListComponent,
  // },
  {
    path: 'player',
    component: PlayerListComponent,
  },
  {
    path: 'welcom-game',
    component: OnlinePlayerComponent,
  },
  // {
  //   path: 'room-detail',
  //   component: RoomDetailComponent,
  // },
  // {
  //   path: 'trainer',
  //   component: ListUserComponent,
  // },
  // {
  //   path: 'add-trainer', //
  //   component: AddUserComponent,
  // },
  {
     path: 'auth', 
     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
   },
  { 
    path: 'room', 
    loadChildren: () => import('./room/room.module').then(m => m.RoomModule) 
  },
  { 
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule) 
  },
  { path: 'game', loadChildren: () => import('./game/game.module').then(m => m.GameModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
