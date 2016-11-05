module MemberType{
    export enum MemberLevel {
        VIP,
        Normal
    }
}

module ShoppingCar {
    export interface IDiscounter {
        GetDiscount(price: number, qty: number, level: MemberType.MemberLevel);
    }

}
module ShoppingCar {  
    export class QtyDiscounter implements IDiscounter {
        GetDiscount(price: number, qty: number, level: MemberType.MemberLevel) {
            if (qty > 4) {
                return 0.8;
            }
            else if (qty > 2) {
                return 0.9;
            }
            else {
                return 1;
            }
        }
    }

    export class PriceDiscounter implements IDiscounter {
        GetDiscount(price: number, qty: number, level: MemberType.MemberLevel) {
            if (price * qty > 500) {
                return 0.9;
            }
            else {
                return 1;
            }
        }
    }

    export class MemberDiscounter implements IDiscounter {
        GetDiscount(price: number, qty: number, level: MemberType.MemberLevel) {
            if (level === MemberType.MemberLevel.VIP) {
                return 0.9;
            }
            else {
                return 1;
            }
        }
    }



    export class Calculator {
        constructor(private discounterList: IDiscounter[]) {
        }

        Calculate(price: number, qty: number, level: MemberType.MemberLevel):number {
            let totalPrice = price * qty;

            for (let discounter of this.discounterList) {
                var discount = discounter.GetDiscount(price, qty, level);

                totalPrice = totalPrice * discount;
            }

            return totalPrice;
        }
    }


}

  
let discounterList: ShoppingCar.IDiscounter[] = [new ShoppingCar.QtyDiscounter(), new ShoppingCar.PriceDiscounter(), new ShoppingCar.MemberDiscounter()];
let calculator = new ShoppingCar.Calculator(discounterList);

console.log(calculator.Calculate(300, 2, MemberType.MemberLevel.Normal));
console.log(calculator.Calculate(100, 4, MemberType.MemberLevel.VIP));  




