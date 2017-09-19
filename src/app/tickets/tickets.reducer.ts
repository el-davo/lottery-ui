import {TicketsState, ticketsState} from './tickets.state';
import {TicketsActions} from './tickets.actions';
import {NavbarActions} from '../navbar/navbar.actions';

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
        checkedTickets: [...state.checkedTickets, state.selectedTicket],
        selectedTicket: {...state.selectedTicket, checked: true}
      };
    case TicketsActions.CHECK_TICKET_FAIL:
      return {...state, isCheckingTicket: false};
    case NavbarActions.CREATE_TICKET_SUCCESS:
      return {...state, uncheckedTickets: [action.ticket, ...state.uncheckedTickets]};
    case TicketsActions.SHOW_DELETE_TICKET_MODAL:
      return {...state, showDeleteTicketModal: true};
    case TicketsActions.HIDE_DELETE_TICKET_MODAL:
      return {...state, showDeleteTicketModal: false};
    case TicketsActions.DELETE_TICKET:
      return {...state, isDeletingTicket: true};
    case TicketsActions.DELETE_TICKET_SUCCESS:
      return {
        ...state,
        isDeletingTicket: false,
        showDeleteTicketModal: false,
        checkedTickets: state.checkedTickets.filter(ticket => ticket.id !== action.ticket.id),
        uncheckedTickets: state.uncheckedTickets.filter(ticket => ticket.id !== action.ticket.id)
      };
    case TicketsActions.DELETE_TICKET_FAIL:
      return {...state, isDeletingTicket: false};
    case TicketsActions.SHOW_ADD_LINES_MODAL:
      return {...state, showAddLinesModal: true};
    case TicketsActions.HIDE_ADD_LINES_MODAL:
      return {...state, showAddLinesModal: false};
    case TicketsActions.ADD_LINES:
      return {...state, isAddingLines: true};
    case TicketsActions.ADD_LINES_SUCCESS:
      return {...state, isAddingLines: false, showAddLinesModal: false};
    case TicketsActions.ADD_LINES_FAIL:
      return {...state, isAddingLines: false};
    default:
      return state;
  }
};
