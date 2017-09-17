import {Component} from '@angular/core';
import {dispatch, select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import {NavbarState} from '../navbar.state';
import {NavbarActions} from '../navbar.actions';

@Component({
  selector: 'app-add-ticket-modal',
  templateUrl: './add-ticket-modal.component.html',
  styleUrls: ['./add-ticket-modal.component.css']
})
export class AddTicketModalComponent {

  @select('navbar') navbar$: Observable<NavbarState>;

  constructor(private navbarActions: NavbarActions) {
  }

  @dispatch()
  hideModal = () => this.navbarActions.hideAddTicketModal();

  @dispatch()
  createTicket = () => this.navbarActions.createTicket();

}
