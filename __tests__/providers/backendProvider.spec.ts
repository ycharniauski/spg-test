import { Office } from '../../src/models/Office';
import { Partner } from '../../src/models/Partner';
import { BackendProvider } from '../../src/providers/backendProvider/BackendProvider';
import createBackendProvider from '../../src/providers/backendProvider/createBackendProvider';


describe('Test providers/backendProvider real endpoints', () => {
  let provider: BackendProvider;

  beforeAll(() => {
    provider = createBackendProvider();
  });

  test('Test getPartners endpoint', async () => {
    const partners = await provider.getPartners();
    expect(partners.length).toBeGreaterThan(0);

    const uniqPartnerIds = new Set();

    partners.forEach((partner: Partner) => {
      expect(typeof partner.id).toEqual('number');
      expect(partner.id > 0).toBeTruthy();
      expect(uniqPartnerIds.has(partner.id)).toBeFalsy();
      uniqPartnerIds.add(partner.id);

      expect(typeof partner.organization).toEqual('string');
      expect(partner.organization).toBeTruthy();

      expect(Array.isArray(partner.offices)).toBeTruthy();

      partner.offices.forEach((office: Office) => {
        expect(office.address).toBeTruthy();
        expect(typeof office.coordinates.lat).toEqual('number');
        expect(typeof office.coordinates.lon).toEqual('number');
      });
    })
  });

  test('Test sendInvitation endpoint', async () => {
    let sendInvitationError: any;
    try {
      await provider.sendInvitation({ address: 'Address', message: 'Msg' });
    } catch (err) {
      sendInvitationError = err;
    }
    expect(sendInvitationError).toBeFalsy();
  });
});