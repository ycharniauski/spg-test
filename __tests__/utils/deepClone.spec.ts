import { deepClone } from '../../src/utils/deepClone';

describe('utils/deepClone', () => {
  test('Clone primitives', () => {
    expect(deepClone(null) === null).toBeTruthy();
    expect(deepClone(1) === 1).toBeTruthy();
    expect(Number.isNaN(deepClone(NaN))).toBeTruthy();

    const x = Symbol();
    expect(deepClone(x) === x).toBeTruthy();

    const n = new Number(1);
    expect(deepClone(n) !== n).toBeTruthy();
    expect(deepClone(n) === 1).toBeTruthy();

    const b = new Boolean(false);
    expect(deepClone(b) !== b).toBeTruthy();
    expect(deepClone(b) === false).toBeTruthy();

    const func = () => {};
    expect(deepClone(func) === func).toBeTruthy();
    expect(deepClone('s') === 's');

    const d = new Date();
    expect(deepClone(d) !== d).toBeTruthy();
    expect(d.getTime() === d.getTime());
  });

  test('Clone array, check object children', () => {
    const subArray = [['val'], 2, 3];
    const another = { x: { y: 1 } };
    const func = () => {};

    const obj = [
      null, 
      1, 
      undefined, 
      another, 
      's', 
      func,
      subArray,
      ];

    const res = deepClone(obj);
    expect(Array.isArray(res)).toBeTruthy();
    expect(res.length === obj.length).toBeTruthy();
    expect(res[0] === null).toBeTruthy();
    expect(res[1] === 1).toBeTruthy();
    expect(res[2] === undefined).toBeTruthy();
    expect(res[3] !== another).toBeTruthy();
    expect(res[3].x !== another.x).toBeTruthy();
    expect(res[3].x.y === another.x.y).toBeTruthy();
    expect(res[4] === 's').toBeTruthy();
    expect(res[5] === func).toBeTruthy();
    expect(Array.isArray(res[6])).toBeTruthy();
    expect(Array.isArray(res[6][0])).toBeTruthy();
    expect(res[6][0] !== subArray[0]).toBeTruthy();
    expect(res[6].length === subArray.length).toBeTruthy();
    expect(res[6][0][0] === 'val').toBeTruthy();
    expect(res[6][1] === 2).toBeTruthy();
    expect(res[6][2] === 3).toBeTruthy();

    expect(JSON.stringify(res) === JSON.stringify(obj));
  });

  test('Check proto after clone', () => {
    const a: any = { x: 1 };
    const b: any = { y: 2 };
    b.__proto__ = a;
    expect(b.y).toEqual(2);
    expect(b.x).toEqual(1);
    const clone: any = deepClone(b);
    expect(clone.y).toEqual(2);
    expect(clone.x).toEqual(1);
    expect(Object.keys(clone).length === 1);
  });
});