import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stage2Component } from './stage2/stage2.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [Stage2Component],
  imports: [CommonModule, SharedModule],
})
export class GameModule {}
