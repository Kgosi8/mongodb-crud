import { Routes } from '@angular/router';
import { EventList } from './pages/event-list/event-list';
import { EventDetail } from './pages/event-detail/event-detail';
import { CreateEvent } from './pages/create-event/create-event';

export const routes: Routes = [
    {path:'',component: EventList},
    {path:'events/:id',component: EventDetail},
    {path:'create',component: CreateEvent}
];
