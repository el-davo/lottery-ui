import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {TicketsActions} from '../tickets.actions';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {TicketsState} from '../tickets.state';

@Component({
  selector: 'app-selected-ticket',
  templateUrl: './selected-ticket.component.html',
  styleUrls: ['./selected-ticket.component.css']
})
export class SelectedTicketComponent {

  @select('tickets') tickets$: Observable<TicketsState>;

  constructor(private ticketActions: TicketsActions, private route: ActivatedRoute) {
    this.route.params.subscribe(({id}) => this.fetchSelectedTicket(id));
  }

  @dispatch()
  fetchSelectedTicket = (id: string) => this.ticketActions.fetchSelectedTicket(id);
}
