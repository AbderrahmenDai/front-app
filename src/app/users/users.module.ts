import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddTrainerComponent } from './add-trainer/add-trainer.component';
import { ListTrainerComponent } from './list-trainer/list-trainer.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    UsersComponent,
    AddTrainerComponent,
    ListTrainerComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
