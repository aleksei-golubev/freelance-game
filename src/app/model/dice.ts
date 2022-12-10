export class Dice<T> {
  private values: T[];
  private currentValue: T;

  constructor(values: T[]) {
    this.values = values;
    this.drop();
  }

  drop(): void {
    let edge = Math.round(Math.random()*(this.values.length - 1));
    this.currentValue = this.values[edge];
  }

  getCurrentValue(): T {
    return this.currentValue;
  }
}