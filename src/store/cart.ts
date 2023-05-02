import { makeObservable, observable, computed, action } from "mobx";

class Store {
  amount: number = 0;
  price: number = 0;

  constructor() {
    makeObservable(this, {
      amount: observable,
      price: observable,
      total: computed,
      incrementAmount: action,
      decrementAmount: action,
    });
  }

  public setPrice = (price: number) => {
    this.price = Math.max(0, price);
  };

  public incrementAmount = () => {
    this.amount++;
  };

  public decrementAmount = () => {
    this.amount = Math.max(0, this.amount - 1);
  };

  get total() {
    return this.amount * this.price;
  }
}

export const cartStore = new Store();
