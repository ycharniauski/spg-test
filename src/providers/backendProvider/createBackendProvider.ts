import { BackendProvider } from './BackendProvider';

import getPartners from './methods/getPartners';
import sendInvitation from './methods/sendInvitation';

export default function createBackendProvider(): BackendProvider {
  return {
    getPartners,
    sendInvitation,
  }
}