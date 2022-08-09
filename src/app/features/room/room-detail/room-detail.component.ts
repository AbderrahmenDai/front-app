import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface RoomData {
  id: number;
  name: string;
  nbrOfMember: number;
  numberOfSprint: number;
  duration: number;
}

const ELEMENT_DATA: RoomData[] = [
  { id: 1, name: 'Hydrogen', duration: 10, nbrOfMember: 6, numberOfSprint: 2 },
  { id: 2, name: 'Helium', duration: 40, nbrOfMember: 5, numberOfSprint: 5 },
  { id: 3, name: 'Lithium', duration: 30, nbrOfMember: 3, numberOfSprint: 4 },
  { id: 4, name: 'Beryllium', duration: 25, nbrOfMember: 4, numberOfSprint: 4 },
  { id: 5, name: 'Boron', duration: 45, nbrOfMember: 9, numberOfSprint: 4 },
  { id: 6, name: 'Carbon', duration: 60, nbrOfMember: 8, numberOfSprint: 4 },
  { id: 7, name: 'Nitrogen', duration: 15, nbrOfMember: 7, numberOfSprint: 4 },
];

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css'],
})
export class RoomDetailComponent {
  columns = [
    {
      columnDef: 'id',
      header: 'No.',
      cell: (element: RoomData) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: RoomData) => `${element.name}`,
    },
    {
      columnDef: 'nbrOfMember',
      header: 'nbrOfMember',
      cell: (element: RoomData) => `${element.nbrOfMember}`,
    },
    {
      columnDef: 'numberOfSprint',
      header: 'numberOfSprint',
      cell: (element: RoomData) => `${element.numberOfSprint}`,
    },
    {
      columnDef: 'duration',
      header: 'duration',
      cell: (element: RoomData) => `${element.duration}`,
    },
  ];
  dataSource = ELEMENT_DATA;
  displayedColumns = this.columns.map((c) => c.columnDef);
}

 

