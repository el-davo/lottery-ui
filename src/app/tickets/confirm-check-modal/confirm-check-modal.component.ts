import {Component} from '@angular/core';
import {TicketsActions} from '../tickets.actions';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {TicketsState} from '../tickets.state';

@Component({
  selector: 'app-confirm-check-modal',
  templateUrl: './confirm-check-modal.component.html',
  styleUrls: ['./confirm-check-modal.component.css']
})
export class ConfirmCheckModalComponent {

  @select('tickets') tickets$: Observable<TicketsState>;

  constructor(private ticketsActions: TicketsActions) {
  }

  @dispatch()
  hideModal() {
    return this.ticketsActions.hideConfirmCheckModal();
  }

  @dispatch()
  checkTicket() {
    return this.ticketsActions.checkTicket();
  }

}
