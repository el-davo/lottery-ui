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
    case TicketsActions.SHOW_CONFIRM_CHECK_MODAL:
      return {...state, showConfirmCheckModal: true};
    case TicketsActions.HIDE_CONFIRM_CHECK_MODAL:
      return {...state, showConfirmCheckModal: false};
    case TicketsActions.CHECK_TICKET:
      return {...state, isCheckingTicket: true};
    case TicketsActions.CHECK_TICKET_SUCCESS:
      return {
        ...state, isCheckingTicket: false, showConfirmCheckModal: false,
        uncheckedTickets: state.uncheckedTickets.filter(ticket => ticket.id !== state.selectedTicket.id),
        checkTickets: [...state.checkedTickets, state.selectedTicket]
      };
    case TicketsActions.CHECK_TICKET_FAIL:
      return {...state, isCheckingTicket: false};
    default:
      return state;
  }
};
