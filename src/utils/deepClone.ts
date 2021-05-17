const PRIMITIVE_TYPE_NAMES = [
  'undefined',
  'number',
  'string',
  'boolean',
  'symbol',
  'bigint',
];

export function deepClone(obj: any): any {
  if (obj === null) return null;
  
  const t = typeof obj;

  if (PRIMITIVE_TYPE_NAMES.includes(t) || t === 'function') return obj;

  const { constructor } = obj;

  if (constructor === String || constructor === Number || constructor === Boolean) {
    return obj.valueOf();
  }

  if (constructor === Date) {
    return new Date(obj);
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const instance: any = {};

  Object.keys(obj).forEach(key => {
    instance[key] = deepClone(obj[key]);
  });

  instance.__proto__ = obj.__proto__;

  return instance;
}