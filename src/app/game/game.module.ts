import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { StageOneComponent } from './stage-one/stage-one.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    GameComponent,
    StageOneComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MaterialModule
  ]
})
export class GameModule { }
