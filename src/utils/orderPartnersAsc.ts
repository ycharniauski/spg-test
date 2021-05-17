import { Partner } from '../models/Partner';

export function orderPartnersAsc(p0: Partner, p1: Partner): number {
  return p0.organization.toLowerCase() < p1.organization.toLowerCase() ? -1 : 1;
}