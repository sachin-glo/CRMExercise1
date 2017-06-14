export class Field {
 id: number;
  field: string = '';
    constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
