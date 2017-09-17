import {NavbarState, navbarState} from './navbar.state';
import {NavbarActions} from './navbar.actions';

export const navbarReducer = (state: NavbarState = navbarState, action): NavbarState => {
  switch (action.type) {
    case NavbarActions.SHOW_ADD_TICKET_MODAL:
      return {...state, showAddTicketModal: true};
    case NavbarActions.HIDE_ADD_TICKET_MODAL:
      return {...state, showAddTicketModal: false};
    case NavbarActions.CREATE_TICKET:
      return {...state, isCreatingTicket: true};
    case NavbarActions.CREATE_TICKET_SUCCESS:
      return {...state, isCreatingTicket: false, showAddTicketModal: false};
    case NavbarActions.CREATE_TICKET_FAIL:
      return {...state, isCreatingTicket: false};
    default:
      return state;
  }
};
