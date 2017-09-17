import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {createLogger} from 'redux-logger';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {rootReducer} from './root.reducer';
import {FormsModule} from '@angular/forms';
import {NgReduxFormModule} from '@angular-redux/form';
import {NgReduxRouter, NgReduxRouterModule} from '@angular-redux/router';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import * as reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import * as persistState from 'redux-localstorage'
import {environment} from '../environments/environment';
import {AppComponent} from './app.component';
import {ClarityModule} from 'clarity-angular';
import {routes} from './routes';

import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import {TicketsModule} from './tickets/tickets.module';
import {TicketsEpic} from './tickets/tickets.epic';
import {NavbarModule} from './navbar/navbar.module';
import {NavbarEpic} from './navbar/navbar.epic';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    ClarityModule.forRoot(),
    NgReduxModule,
    NgReduxFormModule,
    TicketsModule,
    NgReduxRouterModule,
    NavbarModule
  ],
  providers: [
    TicketsEpic,
    NavbarEpic
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private ngRedux: NgRedux<any>,
              ngReduxRouter: NgReduxRouter,
              private ticketsEpic: TicketsEpic,
              private navbarEpic: NavbarEpic) {

    const epics = combineEpics(
      this.ticketsEpic.fetchTickets,
      this.ticketsEpic.fetchSelectedTicket,
      this.ticketsEpic.checkTicket,
      this.navbarEpic.createTicket
    );

    const middleware = [
      createEpicMiddleware(epics),
      createLogger(),
      reduxImmutableStateInvariant.default()
    ];

    const enhancers = [];

    if (environment.hmr) {
      enhancers.push(persistState());
    }

    ngRedux.configureStore(rootReducer, {}, middleware, enhancers);
    ngReduxRouter.initialize();
  }

}
