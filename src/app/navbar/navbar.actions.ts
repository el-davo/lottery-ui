import {Injectable} from '@angular/core';
import {Ticket} from '../tickets/tickets.state';

@Injectable()
export class NavbarActions {

  static SHOW_ADD_TICKET_MODAL = 'navbar/SHOW_ADD_TICKET_MODAL';
  static HIDE_ADD_TICKET_MODAL = 'navbar/HIDE_ADD_TICKET_MODAL';

  static CREATE_TICKET = 'navbar/CREATE_TICKET';
  static CREATE_TICKET_SUCCESS = 'navbar/CREATE_TICKET_SUCCESS';
  static CREATE_TICKET_FAIL = 'navbar/CREATE_TICKET_FAIL';

  showAddTicketModal() {
    return {type: NavbarActions.SHOW_ADD_TICKET_MODAL};
  }

  hideAddTicketModal() {
    return {type: NavbarActions.HIDE_ADD_TICKET_MODAL};
  }

  createTicket() {
    return {type: NavbarActions.CREATE_TICKET};
  }

  createTicketSuccess(ticket: Ticket) {
    return {type: NavbarActions.CREATE_TICKET_SUCCESS, ticket};
  }

  createTicketFail() {
    return {type: NavbarActions.CREATE_TICKET_FAIL};
  }
}
