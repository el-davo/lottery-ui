import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TicketsState} from '../tickets.state';
import {dispatch, select} from '@angular-redux/store';
import {TicketsActions} from '../tickets.actions';

@Component({
  selector: 'app-confirm-delete-modal',
  templateUrl: './confirm-delete-modal.component.html',
  styleUrls: ['./confirm-delete-modal.component.css']
})
export class ConfirmDeleteModalComponent {

  @select('tickets') tickets$: Observable<TicketsState>;

  constructor(private ticketsActions: TicketsActions) {
  }

  @dispatch()
  hideModal = () => this.ticketsActions.hideDeleteTicketModal();

  @dispatch()
  deleteTicket = () => this.ticketsActions.deleteTicket();

}
