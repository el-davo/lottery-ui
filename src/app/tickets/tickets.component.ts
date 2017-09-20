import {Component, OnInit} from '@angular/core';
import {dispatch, ObservableStore, select} from '@angular-redux/store';
import {TicketsState} from './tickets.state';
import {TicketsActions} from './tickets.actions';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  @select('tickets') tickets$: ObservableStore<TicketsState>;

  constructor(private ticketsActions: TicketsActions) {
  }

  @dispatch()
  ngOnInit() {
    return this.ticketsActions.fetchTickets();
  }
}
