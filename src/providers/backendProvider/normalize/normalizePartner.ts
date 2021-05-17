import { Partner } from '../../../models/Partner';
import { normalizeOffice } from './normalizeOffice';

export function normalizePartner(raw: any): Partner {
  const { 
    id,
    organization,
    offices, 
  } = raw;

  return {
    id: raw.id,
    offices: Array.isArray(offices) ? offices.map(normalizeOffice) : [],
    organization: raw.organization || '',
  }
}