import { Coordinates } from '../../src/models/Coordinates';
import { parseCoordinates } from '../../src/utils/parseCoordinates';

describe('utils/parseCoordinates', () => {
  test('Test parseCoordinates', () => {
    const { lat, lon } = parseCoordinates('1.23,5.678');
    expect(lat).toEqual(1.23);
    expect(lon).toEqual(5.678);
  });

  test('Test parseCoordinates include minuses', () => {
    const { lat, lon } = parseCoordinates('-50.86,-120.204');
    expect(lat).toEqual(-50.86);
    expect(lon).toEqual(-120.204);
  });

  test('Test parseCoordinates include minuses and spaces', () => {
    const { lat, lon } = parseCoordinates(' -33.8934219 , 151.20404600000006 ');
    expect(lat).toEqual(-33.8934219);
    expect(lon).toEqual(151.20404600000006);
  });
});