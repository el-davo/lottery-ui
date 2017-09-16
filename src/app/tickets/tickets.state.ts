export const ticketsState: TicketsState = {
  isFetchingTickets: false,
  isFetchingSelectedTicket: false,
  checkedTickets: [],
  uncheckedTickets: [],
  selectedTicket: null
};

export interface TicketsState {
  isFetchingTickets: boolean;
  isFetchingSelectedTicket: boolean;
  checkedTickets: Ticket[];
  uncheckedTickets: Ticket[];
  selectedTicket: Ticket;
}

export interface Ticket {
  id: string;
  checked: boolean;
  lines: Line[];
}

export interface Line {
  id: string;
  result: number;
  numbers: Number[]
}

export interface Number {
  id: string;
  number: number
}
