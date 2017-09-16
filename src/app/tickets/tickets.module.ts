import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClrVerticalNavModule} from 'clarity-angular/layout/vertical-nav/vertical-nav.module';
import {RouterModule} from '@angular/router';
import {TicketsComponent} from './tickets.component';
import {TicketsActions} from './tickets.actions';
import {TicketsService} from './tickets.service';
import { SelectedTicketComponent } from './selected-ticket/selected-ticket.component';

@NgModule({
  imports: [
    CommonModule,
    ClrVerticalNavModule,
    RouterModule
  ],
  providers: [
    TicketsActions,
    TicketsService
  ],
  declarations: [
    TicketsComponent,
    SelectedTicketComponent
  ],
  exports: [
    TicketsComponent
  ]
})
export class TicketsModule {
}
