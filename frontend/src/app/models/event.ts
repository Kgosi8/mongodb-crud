export interface IEvent {
  _id?: string;
  title: string;
  description: string;
  date: string;
  location: string;
  capacity: number;
  attendees?: string[]; // emails
  createdAt?: string;
  updatedAt?: string;
}
