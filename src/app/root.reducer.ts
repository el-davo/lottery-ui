import {routerReducer as router} from '@angular-redux/router';
import {composeReducers, defaultFormReducer} from '@angular-redux/form';
import {combineReducers} from 'redux';
import {ticketsReducer as tickets} from './tickets/tickets.reducer';
import {navbarReducer as navbar} from './navbar/navbar.reducer';

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    router,
    tickets,
    navbar
  })
);
