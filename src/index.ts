import inviteToParty from './business/inviteToParty';
import { HEAD_OFFICE_COORDINATE, KILOMETRE } from './constants/common';
import createBackendProvider from './providers/backendProvider/createBackendProvider';
import injector from './utils/injector';

injector.registerBackendProvider(createBackendProvider());

(async function main() {
  try {
    await inviteToParty({
      message: "You are invited",
      partyCoordinates: HEAD_OFFICE_COORDINATE,
      radius: 100 * KILOMETRE,
    });
  } catch (error) {
    console.log(error);
  }
})();

