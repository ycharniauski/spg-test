import data from '../partners.json';
import { Partner } from '../../../models/Partner';
import { normalizePartner } from '../normalize/normalizePartner';

export default async function getPartners(): Promise<Partner[]> {
  return data.map(normalizePartner);
}