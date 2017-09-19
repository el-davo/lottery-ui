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
import {SnotifyService} from 'ng-snotify';

@Injectable()
export class TicketsEpic {
  constructor(private snotifyService: SnotifyService,
              private ticketsActions: TicketsActions,
              private ticketsService: TicketsService,
              private router: Router) {
  }

  fetchTickets = action$ => {
    return action$.ofType(TicketsActions.FETCH_TICKETS)
      .mergeMap(() => {
        return this.ticketsService.fetchTickets()
          .map(tickets => this.ticketsActions.fetchTicketsSuccess(tickets))
          .catch(() => {
            this.snotifyService.error(`An error occurred fetching tickets :(`, 'Error');

            return Observable.of(this.ticketsActions.fetchTicketsFail())
          });
      });
  };

  fetchSelectedTicket = action$ => {
    return action$.ofType(TicketsActions.FETCH_SELECTED_TICKET)
      .mergeMap(({id}) => {
        return this.ticketsService.fetchTicketById(id)
          .map(ticket => this.ticketsActions.fetchSelectedTicketSuccess(ticket))
          .catch(() => {
            this.snotifyService.error(`An error occurred fetching ticket :(`, 'Error');

            return Observable.of(this.ticketsActions.fetchSelectedTicketFail())
          });
      });
  };

  checkTicket = (action$, store) => {
    return action$.ofType(TicketsActions.CHECK_TICKET)
      .mergeMap(() => {
        const {selectedTicket} = store.getState().tickets;

        return this.ticketsService.checkTicket(selectedTicket)
          .map(() => {
            this.snotifyService.success('Ticket has been checked!', 'Success');

            return this.ticketsActions.checkTicketSuccess()
          })
          .catch(() => {
            this.snotifyService.error(`An error occurred checking ticket :(`, 'Error');

            return Observable.of(this.ticketsActions.checkTicketFail())
          });
      });
  };

  deleteTicket = (action$, store) => {
    return action$.ofType(TicketsActions.DELETE_TICKET)
      .mergeMap(() => {
        const {selectedTicket} = store.getState().tickets;

        return this.ticketsService.deleteTicket(selectedTicket)
          .map(() => {
            this.router.navigateByUrl('/');

            this.snotifyService.success('Ticket has been deleted!', 'Success');

            return this.ticketsActions.deleteTicketSuccess(selectedTicket)
          })
          .catch(() => {
            this.snotifyService.error(`An error occurred deleting ticket :(`, 'Error');

            return Observable.of(this.ticketsActions.deleteTicketFail())
          });
      });
  };

  addLinesToTicket = (action$, store) => {
    return action$.ofType(TicketsActions.ADD_LINES)
      .mergeMap(() => {
        const {selectedTicket, addLinesTotalLines} = store.getState().tickets;

        return this.ticketsService.addLinesToTicket(selectedTicket, addLinesTotalLines)
          .mergeMap(() => {
            this.snotifyService.success(`Added ${addLinesTotalLines} lines successfully!`, 'Success');

            return Observable.concat(
              Observable.of(this.ticketsActions.addLinesSuccess()),
              Observable.of(this.ticketsActions.fetchSelectedTicket(selectedTicket.id)),
            )
          })
          .catch(() => {
            this.snotifyService.error(`An error occurred adding lines to ticket :(`, 'Error');

            return Observable.of(this.ticketsActions.addLinesFail())
          });
      });
  };

}
