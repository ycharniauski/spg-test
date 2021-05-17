import { HEAD_OFFICE_COORDINATE, KILOMETRE } from '../../src/constants/common';
import { Coordinates } from '../../src/models/Coordinates';
import { calcDistance } from '../../src/utils/calcDistance';

const DELTA = 2 * KILOMETRE;

describe('utils/calcDistance', () => {
  test('Test calcDistance', () => {
    let result: number;
    let delta: number;

    result = calcDistance(HEAD_OFFICE_COORDINATE, { lat: -33.8934219, lon: 151.20404600000006 });
    expect(result).toBeGreaterThan(16958044 - DELTA);
    expect(result).toBeLessThan(16958044 + DELTA);

    result = calcDistance(HEAD_OFFICE_COORDINATE, { lat: 52.0629009, lon: -1.3397750000000315 });
    expect(result).toBeGreaterThan(102254 - DELTA);
    expect(result).toBeLessThan(102254 + DELTA);

    result = calcDistance(HEAD_OFFICE_COORDINATE, { lat: 19.4361004, lon: -99.18870959999998 });
    expect(result).toBeGreaterThan(8910920 - DELTA);
    expect(result).toBeLessThan(8910920 + DELTA);

    result = calcDistance(HEAD_OFFICE_COORDINATE, { lat: 51.5014767, lon: -0.0713608999999451 });
    expect(result).toBeGreaterThan(5057 - DELTA);
    expect(result).toBeLessThan(5057 + DELTA);
  });
});