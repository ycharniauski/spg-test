import { Partner } from '../../models/Partner';

export type SendInvitationParams = {
  address: string,
  message: string,
}

export type BackendProvider = {
  getPartners(): Promise<Partner[]>,
  sendInvitation(SendInvitationParams): Promise<void>,
}
