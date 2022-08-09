import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerListComponent } from './player-list/player-list.component';
import { OnlinePlayerComponent } from './online-player/online-player.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [PlayerListComponent, OnlinePlayerComponent],
  imports: [CommonModule, SharedModule],
})
export class PlayerModule {}
