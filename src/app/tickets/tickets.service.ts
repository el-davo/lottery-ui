import {Injectable} from '@angular/core';
import {urls} from '../common/urls';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Ticket} from './tickets.state';

@Injectable()
export class TicketsService {

  constructor(private http: Http) {
  }

  fetchTickets(): Observable<Ticket[]> {
    return this.http.get(`${urls.apiUrl}/tickets`).map(res => res.json());
  }

  fetchTicketById(id: string): Observable<Ticket> {
    return this.http.get(`${urls.apiUrl}/tickets/${id}`).map(res => res.json());
  }

  checkTicket(ticket: Ticket) {
    return this.http.patch(`${urls.apiUrl}/tickets`, {...ticket, checked: true})
      .map(res => res.json());
  }

}
