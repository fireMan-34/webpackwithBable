export function add(a, b) {
  return a + b;
}

export class Add {
  constructor(a, b) {
    this.result = this.add(a, b);
  }

  add(a, b) {
    return add(a, b);
  }
  
}