import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClrVerticalNavModule} from 'clarity-angular/layout/vertical-nav/vertical-nav.module';
import {RouterModule} from '@angular/router';
import {TicketsComponent} from './tickets.component';
import {TicketsActions} from './tickets.actions';
import {TicketsService} from './tickets.service';
import {SelectedTicketComponent} from './selected-ticket/selected-ticket.component';
import {ConfirmCheckModalComponent} from './confirm-check-modal/confirm-check-modal.component';
import {ClrModalModule} from 'clarity-angular/modal/modal.module';
import {ConfirmDeleteModalComponent} from './confirm-delete-modal/confirm-delete-modal.component';
import {AddLinesModalComponent} from './add-lines-modal/add-lines-modal.component';
import {FormsModule} from '@angular/forms';
import {NgReduxFormModule} from '@angular-redux/form/dist/source';
import {SnotifyService} from 'ng-snotify';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  imports: [
    CommonModule,
    ClrVerticalNavModule,
    RouterModule,
    ClrModalModule,
    FormsModule,
    NgReduxFormModule
  ],
  providers: [
    TicketsActions,
    TicketsService
  ],
  declarations: [
    TicketsComponent,
    SelectedTicketComponent,
    ConfirmCheckModalComponent,
    ConfirmDeleteModalComponent,
    AddLinesModalComponent,
    EmptyComponent
  ],
  exports: [
    TicketsComponent
  ]
})
export class TicketsModule {
}
