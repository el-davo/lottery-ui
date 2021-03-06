import {Injectable} from '@angular/core';
import {urls} from '../common/urls';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Line, Ticket} from './tickets.state';

@Injectable()
export class TicketsService {

  constructor(private http: Http) {
  }

  createTicket(totalLines: number): Observable<Ticket> {
    return this.http.post(`${urls.apiUrl}/tickets`, {totalLines}).map(res => res.json());
  }

  fetchTickets(): Observable<Ticket[]> {
    return this.http.get(`${urls.apiUrl}/tickets`).map(res => res.json());
  }

  fetchTicketById(id: string): Observable<Ticket> {
    return this.http.get(`${urls.apiUrl}/tickets/${id}`).map(res => res.json());
  }

  checkTicket(ticket: Ticket) {
    const checkingTicket = {...ticket};
    delete checkingTicket.lines;
    return this.http.patch(`${urls.apiUrl}/tickets`, {...checkingTicket, checked: true})
      .map(res => res.json());
  }

  deleteTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.delete(`${urls.apiUrl}/tickets/${ticket.id}`).map(res => res.json());
  }

  addLinesToTicket(ticket: Ticket, totalLines): Observable<Line[]> {
    return this.http.post(`${urls.apiUrl}/bulkCreateLines`, {
      ticketId: ticket.id,
      totalLines: parseInt(totalLines, 0)
    })
      .map(res => res.json());
  }
}
