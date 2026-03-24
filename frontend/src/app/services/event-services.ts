import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from '../models/event';
import { BASE_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class EventServices {
  constructor(private http: HttpClient) {}

  //GET all events

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(BASE_URL);
  }

  //GET single event

  getEvent(id: string): Observable<IEvent> {
    return this.http.get<IEvent>(`${BASE_URL}/${id}`);
  }

  //CREATE event

  createEvent(data: IEvent): Observable<IEvent> {
    return this.http.post<IEvent>(BASE_URL, data);
  }

  // REGISTER

  register(id: string, email: string): Observable<IEvent> {
    return this.http.post<IEvent>(
      `${BASE_URL}/${id}/register
      `,
      { email },
    );
  }

  // UPDATE event

  updateEvent(id: string, data: IEvent):Observable<IEvent> {
    return this.http.put<IEvent>(`${BASE_URL}/${id}`, data);
  }

  // DELETE event

  deleteEvent(id: string) {
    return this.http.delete(`${BASE_URL}/${id}`);
  }
}
