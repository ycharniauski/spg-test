import { SendInvitationParams } from '../BackendProvider';

export default async function sendInvitation({ address, message }: SendInvitationParams): Promise<void> {
  // todo: should be replaced with real endpoint
  console.log(`${message}. Email to="${address}"`);
}