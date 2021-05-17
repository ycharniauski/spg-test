import { Office } from '../../../models/Office';
import { parseCoordinates } from '../../../utils/parseCoordinates';

export function normalizeOffice(raw: any): Office {
  return {
    address: raw.address || '',
    coordinates: parseCoordinates(raw.coordinates),
  }
}