import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListUserComponent } from './components/list-user/list-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';



@NgModule({
  declarations: [
    ListUserComponent,
    AddUserComponent
  ],
  imports: [CommonModule, SharedModule],
})
export class UserModule { }
