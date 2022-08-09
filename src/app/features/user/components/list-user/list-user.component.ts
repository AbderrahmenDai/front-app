import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../../service/user.service';

export interface Trainer {
  id?: number ;
  firstname: string ;
  lastname: string ;
  birthdate: string ;
  gender: string ;
  education: string ;
  company: string ;
  jobExperience: number ;
  salary: number ;
  profile: string ;
}

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  @Input() trainer!: Trainer;
  @Output() onRemoveTrainer = new EventEmitter<number>();
  @Output() onEditTrainer = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  MyDataSource: any;
  TrainerList!: Trainer[];
  displayedColumns: string[] = [
    "id",
    'firstName',
    'lastName',
    'birthdate',
    'gender',
    'education',
    'company',
    'jobExperience',
    'salary',
    'profile',
    'email',
    'phone',
    'action',
  ];

  constructor(private userService: UserService) {
    this.trainer = {
      firstname: '',
      lastname: '',
      birthdate: '',
      gender: '',
      education: '',
      company: '',
      jobExperience: 0,
      salary: 0,
      profile: '',
    };
  }

  ngOnInit(): void {
    console.log(this.trainer);
  }

  deleteTrainerClicked() {
    this.onRemoveTrainer.emit(this.trainer.id);
  }

  editTrainerClicked() {
    this.onEditTrainer.emit(this.trainer.id);
  }
}
