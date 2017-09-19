import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar.component';
import {ClrIconModule} from 'clarity-angular/icon/icon.module';
import {NavbarActions} from './navbar.actions';
import {AddTicketModalComponent} from './add-ticket-modal/add-ticket-modal.component';
import {ClrModalModule} from 'clarity-angular/modal/modal.module';
import {ClrLoadingModule} from 'clarity-angular/utils/loading/loading.module';
import {NgReduxFormModule} from '@angular-redux/form/dist/source';
import {FormsModule} from '@angular/forms';
import {ClarityModule} from 'clarity-angular';

@NgModule({
  imports: [
    CommonModule,
    ClrIconModule,
    ClrModalModule,
    FormsModule,
    NgReduxFormModule,
    ClrLoadingModule,
    ClarityModule
  ],
  declarations: [
    NavbarComponent,
    AddTicketModalComponent
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    NavbarActions
  ]
})
export class NavbarModule {
}
