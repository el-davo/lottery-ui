import {Component} from '@angular/core';
import {NavbarActions} from './navbar.actions';
import {dispatch} from '@angular-redux/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private navbarActions: NavbarActions) {
  }

  @dispatch()
  showAddTicketModal = () => this.navbarActions.showAddTicketModal();
}
