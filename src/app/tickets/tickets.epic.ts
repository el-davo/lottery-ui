import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TicketsActions} from './tickets.actions';
import {TicketsService} from './tickets.service';
import {Router} from '@angular/router';

@Injectable()
export class TicketsEpic {
  constructor(private ticketsActions: TicketsActions, private ticketsService: TicketsService, private router: Router) {
  }

  fetchTickets = action$ => {
    return action$.ofType(TicketsActions.FETCH_TICKETS)
      .mergeMap(() => {
        return this.ticketsService.fetchTickets()
          .map(tickets => this.ticketsActions.fetchTicketsSuccess(tickets))
          .catch(err => Observable.of(this.ticketsActions.fetchTicketsFail()));
      });
  };

  fetchSelectedTicket = action$ => {
    return action$.ofType(TicketsActions.FETCH_SELECTED_TICKET)
      .mergeMap(({id}) => {
        return this.ticketsService.fetchTicketById(id)
          .map(ticket => this.ticketsActions.fetchSelectedTicketSuccess(ticket))
          .catch(err => Observable.of(this.ticketsActions.fetchSelectedTicketFail()));
      });
  };

  checkTicket = (action$, store) => {
    return action$.ofType(TicketsActions.CHECK_TICKET)
      .mergeMap(() => {
        const {selectedTicket} = store.getState().tickets;

        return this.ticketsService.checkTicket(selectedTicket)
          .map(ticket => this.ticketsActions.checkTicketSuccess())
          .catch(err => Observable.of(this.ticketsActions.checkTicketFail()));
      });
  };

  deleteTicket = (action$, store) => {
    return action$.ofType(TicketsActions.DELETE_TICKET)
      .mergeMap(() => {
        const {selectedTicket} = store.getState().tickets;

        return this.ticketsService.deleteTicket(selectedTicket)
          .map(() => {
            this.router.navigateByUrl('/');
            return this.ticketsActions.deleteTicketSuccess(selectedTicket)
          })
          .catch(err => Observable.of(this.ticketsActions.deleteTicketFail()));
      });
  };

}
