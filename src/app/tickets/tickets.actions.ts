import {Injectable} from '@angular/core';
import {Ticket} from './tickets.state';

@Injectable()
export class TicketsActions {

  static FETCH_TICKETS = 'tickets/FETCH_TICKETS';
  static FETCH_TICKETS_SUCCESS = 'tickets/FETCH_TICKETS_SUCCESS';
  static FETCH_TICKETS_FAIL = 'tickets/FETCH_TICKETS_FAIL';

  static FETCH_SELECTED_TICKET = 'tickets/FETCH_SELECTED_TICKET';
  static FETCH_SELECTED_TICKET_SUCCESS = 'tickets/FETCH_SELECTED_TICKET_SUCCESS';
  static FETCH_SELECTED_TICKET_FAIL = 'tickets/FETCH_SELECTED_TICKET_FAIL';

  fetchTickets() {
    return {type: TicketsActions.FETCH_TICKETS};
  }

  fetchTicketsSuccess(tickets: Ticket[]) {
    return {type: TicketsActions.FETCH_TICKETS_SUCCESS, tickets};
  }

  fetchTicketsFail() {
    return {type: TicketsActions.FETCH_TICKETS_FAIL};
  }

  fetchSelectedTicket(id: string) {
    return {type: TicketsActions.FETCH_SELECTED_TICKET, id};
  }

  fetchSelectedTicketSuccess(ticket: Ticket) {
    return {type: TicketsActions.FETCH_SELECTED_TICKET_SUCCESS, ticket};
  }

  fetchSelectedTicketFail() {
    return {type: TicketsActions.FETCH_SELECTED_TICKET_FAIL};
  }
}
