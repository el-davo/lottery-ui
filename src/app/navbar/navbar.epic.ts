import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NavbarActions} from './navbar.actions';
import {TicketsService} from '../tickets/tickets.service';
import {SnotifyService} from 'ng-snotify';
import {Router} from '@angular/router';

@Injectable()
export class NavbarEpic {
  constructor(private snotifyService: SnotifyService,
              private navbarActions: NavbarActions,
              private ticketsService: TicketsService,
              private router: Router) {
  }

  createTicket = (action$, store) => {
    return action$.ofType(NavbarActions.CREATE_TICKET)
      .mergeMap(() => {
        const {totalLines} = store.getState().navbar;
        return this.ticketsService.createTicket(totalLines)
          .map(ticket => {
            this.router.navigateByUrl(`/tickets/${ticket.id}`);

            this.snotifyService.success(`Ticket with ${totalLines} lines created successfully!`, 'Success');

            return this.navbarActions.createTicketSuccess(ticket)
          })
          .catch(() => {
            this.snotifyService.error(`An error occurred creating ticket :(`, 'Error');

            return Observable.of(this.navbarActions.createTicketFail())
          });
      });
  };
}
