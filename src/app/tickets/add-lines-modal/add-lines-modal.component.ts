import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {TicketsState} from '../tickets.state';
import {TicketsActions} from '../tickets.actions';

@Component({
  selector: 'app-add-lines-modal',
  templateUrl: './add-lines-modal.component.html',
  styleUrls: ['./add-lines-modal.component.css']
})
export class AddLinesModalComponent {

  @select('tickets') tickets$: Observable<TicketsState>;

  constructor(private ticketsActions: TicketsActions) {
  }

  @dispatch()
  hideModal = () => this.ticketsActions.hideAddLinesModal();

  @dispatch()
  addLines = () => this.ticketsActions.addLines();
}
