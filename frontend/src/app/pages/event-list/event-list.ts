import { Component, OnInit } from '@angular/core';
import { EventServices } from '../../services/event-services';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IEvent } from '../../models/event';

@Component({
  selector: 'app-event-list',
  imports: [RouterLink,CommonModule],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList implements OnInit {
  events: IEvent[]=[];

  constructor(private eventServices: EventServices) {}

  ngOnInit(): void{
    this.eventServices.getEvents().subscribe(
      data=>{
        this.events=data;
      }
    );
  }
}
