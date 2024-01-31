class Discount {
  public applyDiscount(price: number): number {
    return price - price * 0.2;
  }
}

class VIPDiscount extends Discount {
  public applyDiscount(price: number): number {
    return price - price * 0.5;
  }
}

const setDiscount = (discount: Discount): void =>
  console.log(discount.applyDiscount(100));

const discount = new Discount();
const vipDiscount = new VIPDiscount();

setDiscount(discount);
setDiscount(vipDiscount);
