import { Component, OnInit } from '@angular/core';
import { IEvent } from '../../models/event';
import { EventServices } from '../../services/event-services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  imports: [],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css',
})
export class EventDetail implements OnInit {

  event!: IEvent;
  email: string='';

  constructor(
    private route: ActivatedRoute,
    private eventService: EventServices
  ){}

  ngOnInit(): void {
    
  }

}
