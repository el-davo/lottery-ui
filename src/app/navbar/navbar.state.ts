export const navbarState: NavbarState = {
  showAddTicketModal: false,
  isCreatingTicket: false,
  totalLines: 5
};

export interface NavbarState {
  showAddTicketModal: boolean;
  isCreatingTicket: boolean;
  totalLines: number;
}
