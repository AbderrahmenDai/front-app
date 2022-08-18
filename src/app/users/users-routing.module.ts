import { AddTrainerComponent } from './add-trainer/add-trainer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTrainerComponent } from './list-trainer/list-trainer.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'trainer', component: ListTrainerComponent},
  { path: 'add-user', component: AddTrainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
