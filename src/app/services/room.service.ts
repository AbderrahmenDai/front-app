import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Room } from '../models/room.interface';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  URL = environment.Url;

  constructor(private http: HttpClient) {}

  getRoom(roomId: string) {
    return this.http.get<Room>(`${URL}/room/id/${roomId}`);
  }

  getRoomsByMember() {
    return this.http.get<Room[]>(`${URL}/room/member`);
  }

  getUserRooms() {
    return this.http.get<Room[]>(`${URL}/room`);
  }

  createRoom(room: Partial<Room>) {
    return this.http.post<Room>(`${URL}/room`, room);
  }

  deleteRoom(room: Room) {
    return this.http.delete(`${URL}/room/delete/${room._id}`);
  }

  updateRoom(id: string, room: Room) {
    return this.http.put<Room>(`${URL}/room/${id}`, room);
  }

  leaveRoom(roomId: string) {
    return this.http.delete<Room>(`${URL}/room/leave/${roomId}`);
  }

  getRoomWithSortedMembers(room: Room) {
    room.members = room.members.sort((a: any, b: any) =>
      a.online === b.online ? 0 : a.online ? -1 : b.online ? 1 : 0
    );

    return room;
  }
}
