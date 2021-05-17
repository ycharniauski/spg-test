import inviteToParty from '../../src/business/inviteToParty';
import { HEAD_OFFICE_COORDINATE, KILOMETRE } from '../../src/constants/common';
import { Office } from '../../src/models/Office';
import { Partner } from '../../src/models/Partner';
import { BackendProvider } from '../../src/providers/backendProvider/BackendProvider';
import createBackendProvider from '../../src/providers/backendProvider/createBackendProvider';
import injector from '../../src/utils/injector';

import partnersMock from './partnersMock.json';

const EXPECTED_INVITATION_ADRESSES: string[] = [
  'St Saviours Wharf, London SE1 2BE',
  'Newton House, Northampton Science Park, Moulton Park, Kings Park Road, Northampton, NN3 6LG',
  'No1 Royal Exchange, London, EC3V 3DG',
];

describe('Test business/inviteToParty method', () => {
  let invitationAddresses: string[];

  const fakeProvider: BackendProvider = {
    getPartners: async () => partnersMock,
    sendInvitation: async ({ address }) => { invitationAddresses.push(address) },
  };

  beforeAll(() => {
    injector.registerBackendProvider(fakeProvider);
  });

  beforeEach(() => {
    invitationAddresses = [];
  });

  test('Test inviteToParty on officies around 10km from head office ', async () => {
    await inviteToParty({ 
      message: 'Hey!', 
      partyCoordinates: HEAD_OFFICE_COORDINATE, 
      radius: 10 * KILOMETRE
    });

    expect(invitationAddresses).toEqual([
      'St Saviours Wharf, London SE1 2BE',
      'No1 Royal Exchange, London, EC3V 3DG'
    ]);
  });

  test('Test inviteToParty on officies around 100km from head office ', async () => {
    await inviteToParty({ 
      message: 'Hey!', 
      partyCoordinates: HEAD_OFFICE_COORDINATE, 
      radius: 100 * KILOMETRE
    });

    expect(invitationAddresses).toEqual([
      'St Saviours Wharf, London SE1 2BE',
      'Newton House, Northampton Science Park, Moulton Park, Kings Park Road, Northampton, NN3 6LG',
      'No1 Royal Exchange, London, EC3V 3DG',
    ]);
  });
});