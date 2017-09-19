import {Component} from '@angular/core';
import {dispatch} from '@angular-redux/store';
import {NavbarActions} from '../../navbar/navbar.actions';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent {

  constructor(private navbarActions: NavbarActions) {
  }

  @dispatch()
  showAddTicketModal = () => this.navbarActions.showAddTicketModal();

}
