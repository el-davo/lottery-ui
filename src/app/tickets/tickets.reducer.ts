import {TicketsState, ticketsState} from './tickets.state';
import {TicketsActions} from './tickets.actions';

export const ticketsReducer = (state: TicketsState = ticketsState, action): TicketsState => {
  switch (action.type) {
    case TicketsActions.FETCH_TICKETS:
      return {...state, isFetchingTickets: true};
    case TicketsActions.FETCH_TICKETS_SUCCESS:
      return {
        ...state, isFetchingTickets: false,
        checkedTickets: action.tickets.filter(ticket => ticket.checked),
        uncheckedTickets: action.tickets.filter(ticket => !ticket.checked)
      };
    case TicketsActions.FETCH_TICKETS_FAIL:
      return {...state, isFetchingTickets: false};
    case TicketsActions.FETCH_SELECTED_TICKET:
      return {...state, isFetchingSelectedTicket: true};
    case TicketsActions.FETCH_SELECTED_TICKET_SUCCESS:
      return {...state, isFetchingSelectedTicket: false, selectedTicket: action.ticket};
    case TicketsActions.FETCH_SELECTED_TICKET_FAIL:
      return {...state, isFetchingSelectedTicket: false};
    default:
      return state;
  }
};
