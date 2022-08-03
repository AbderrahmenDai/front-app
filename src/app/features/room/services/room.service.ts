import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../../auth/services/auth.service';


const api = 'localhost/3000';

export interface Room {
  _id: string;
  title: string;
  isPublic: boolean;
  members: User[] | string[];
  owner: User | string;
}
@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  getRoom(roomId: string) {
    return this.http
      .get<Room>(`${api}/room/id/${roomId}`)
      .pipe(map(this.getRoomWithSortedMembers));
  }

  getRoomsByMember() {
    return this.http.get<Room[]>(`${api}/room/member`);
  }

  getUserRooms() {
    return this.http.get<Room[]>(`${api}/room`);
  }

  createRoom(room: Partial<Room>) {
    return this.http.post<Room>(`${api}/room`, room);
  }

  deleteRoom(room: Room) {
    return this.http.delete(`${api}/room/delete/${room._id}`);
  }

  updateRoom(id: string, room: Room) {
    return this.http.put<Room>(`${api}/room/${id}`, room);
  }

  leaveRoom(roomId: string) {
    return this.http.delete<Room>(`${api}/room/leave/${roomId}`);
  }

 

  getRoomWithSortedMembers(room: Room) {
    room.members = room.members.sort((a: any, b: any) =>
      a.online === b.online ? 0 : a.online ? -1 : b.online ? 1 : 0
    );

    return room;
  }
}
