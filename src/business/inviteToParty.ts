import { Coordinates } from '../models/Coordinates';
import { Office } from '../models/Office';
import { Partner } from '../models/Partner';

import { calcDistance } from '../utils/calcDistance';
import { orderPartnersAsc } from '../utils/orderPartnersAsc';
import injector from '../utils/injector';

export type InviteToPartyParams = {
  message: string,
  partyCoordinates: Coordinates,
  radius: number,
}

export default async function inviteToParty({ message, partyCoordinates, radius }: InviteToPartyParams) {
  const provider = injector.getBackendProvider();

  const partners = await provider.getPartners();
  const invPromises: Promise<void>[] = [];

  partners.sort(orderPartnersAsc).forEach(({ organization, offices }: Partner) => {
    offices.forEach(({ address, coordinates }: Office) => {

      const distance = calcDistance(partyCoordinates, coordinates);

      if (distance > 0 && distance < radius) {
        invPromises.push(provider.sendInvitation({
          address,
          message: `Invite ${organization}`,
        }));
      }

    });
  });

  await Promise.all(invPromises);
}



