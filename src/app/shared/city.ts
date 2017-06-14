export class City {
     id: number;
  city: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
