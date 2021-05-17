// source https://en.wikipedia.org/wiki/Great-circle_distance

import { EARTH_RADIUS_METRES } from '../constants/common';
import { Coordinates } from '../models/Coordinates';

export function calcDistance(coord0: Coordinates, coord1: Coordinates): number {
  const { lat: lat0, lon: lon0 } = coord0;
  const { lat: lat1, lon: lon1 } = coord1;

  if (lat0 === lat1 && lon0 === lon1) return 0;

  const f0 = lat0 * Math.PI / 180;
  const f1 = lat1 * Math.PI / 180;
  const lam0 = lon0  * Math.PI / 180;
  const lam1 = lon1  * Math.PI / 180;
  const df = f1 - f0;
  const dlam = lam1 - lam0;

  const a = Math.pow(Math.sin(df / 2), 2) + Math.cos(f0) * Math.cos(f1) *  Math.pow(Math.sin(dlam / 2), 2);
  const q = 2 * Math.asin(Math.sqrt(a));

  /* This formula is not very correct because we are using fixed radius of the earth. Earth has an ellepsoid shape, not a circle.
    We can improve formula by calculating a radius for each coordinate and calc average raius. Or we can find a formula to calculate distance
    between points on ellepsoid. 
  */

  return EARTH_RADIUS_METRES * q;
}