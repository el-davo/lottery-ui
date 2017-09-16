import {TicketsComponent} from './tickets/tickets.component';
import {SelectedTicketComponent} from './tickets/selected-ticket/selected-ticket.component';

export const routes = [
  {
    path: '',
    redirectTo: '/tickets',
    pathMatch: 'full'
  }, {
    path: 'tickets',
    component: TicketsComponent,
    children: [
      {
        path: ':id',
        component: SelectedTicketComponent
      }
    ]
  }
];
