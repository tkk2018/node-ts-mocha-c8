export function add(...values: number[]) {
  return values.reduce((p, c) => { return p + c }, 0);
};

export function minus(...values: number[]) {
  return values.reduce((p, c) => { return p - c }, 0);
};
