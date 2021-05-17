import { Coordinates } from '../models/Coordinates';

export function parseCoordinates(raw: string): Coordinates {
 const [lat, lon] = raw.split(',').map(parseFloat);
 return {
   lat,
   lon,
 };
}