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

  static SHOW_CONFIRM_CHECK_MODAL = 'tickets/SHOW_CONFIRM_CHECK_MODAL';
  static HIDE_CONFIRM_CHECK_MODAL = 'tickets/HIDE_CONFIRM_CHECK_MODAL';

  static CHECK_TICKET = 'tickets/CHECK_TICKET';
  static CHECK_TICKET_SUCCESS = 'tickets/CHECK_TICKET_SUCCESS';
  static CHECK_TICKET_FAIL = 'tickets/CHECK_TICKET_FAIL';

  static SHOW_DELETE_TICKET_MODAL = 'tickets/SHOW_DELETE_TICKET_MODAL';
  static HIDE_DELETE_TICKET_MODAL = 'tickets/HIDE_DELETE_TICKET_MODAL';

  static DELETE_TICKET = 'tickets/DELETE_TICKET';
  static DELETE_TICKET_SUCCESS = 'tickets/DELETE_TICKETS_SUCCESS';
  static DELETE_TICKET_FAIL = 'tickets/DELETE_TICKET_FAIL';

  static SHOW_ADD_LINES_MODAL = 'tickets/SHOW_ADD_LINES_MODAL';
  static HIDE_ADD_LINES_MODAL = 'tickets/HIDE_ADD_LINES_MODAL';

  static ADD_LINES = 'tickets/ADD_LINES';
  static ADD_LINES_SUCCESS = 'tickets/ADD_LINES_SUCCESS';
  static ADD_LINES_FAIL = 'tickets/ADD_LINES_FAIL';

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

  showConfirmCheckModal() {
    return {type: TicketsActions.SHOW_CONFIRM_CHECK_MODAL};
  }

  hideConfirmCheckModal() {
    return {type: TicketsActions.HIDE_CONFIRM_CHECK_MODAL};
  }

  checkTicket() {
    return {type: TicketsActions.CHECK_TICKET};
  }

  checkTicketSuccess() {
    return {type: TicketsActions.CHECK_TICKET_SUCCESS};
  }

  checkTicketFail() {
    return {type: TicketsActions.CHECK_TICKET_FAIL};
  }

  showDeleteTicketModal() {
    return {type: TicketsActions.SHOW_DELETE_TICKET_MODAL};
  }

  hideDeleteTicketModal() {
    return {type: TicketsActions.HIDE_DELETE_TICKET_MODAL};
  }

  deleteTicket() {
    return {type: TicketsActions.DELETE_TICKET};
  }

  deleteTicketSuccess(ticket: Ticket) {
    return {type: TicketsActions.DELETE_TICKET_SUCCESS, ticket};
  }

  deleteTicketFail() {
    return {type: TicketsActions.DELETE_TICKET_FAIL};
  }

  showAddLinesModal() {
    return {type: TicketsActions.SHOW_ADD_LINES_MODAL};
  }

  hideAddLinesModal() {
    return {type: TicketsActions.HIDE_ADD_LINES_MODAL};
  }

  addLines() {
    return {type: TicketsActions.ADD_LINES};
  }

  addLinesSuccess() {
    return {type: TicketsActions.ADD_LINES_SUCCESS};
  }

  addLinesFail() {
    return {type: TicketsActions.ADD_LINES_FAIL};
  }
}
