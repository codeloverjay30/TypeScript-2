class MoneyPocket{
    constructor(
        public coin:number
    ){

    }

    purchase(
        price: number
    ): void {
        if(this.coin > price){
            console.log('Not enough coin. The purchase fails.');
            return;
        }
        this.coin -= price;
        console.log('The purchase success.');
    }

    deposit(
        amount: number
    ){
        console.log(`Deposit ${amount} dollars to the bank.`);
        this.coin += amount;
    }

    deposit(
        amount: number,
        donator: Owner
    ){
        if(amount < donator.moneyPocket.coin){
            console.log(`Not enough coin. Donate failed.`);
            return;
        }
        console.log(`Thanks to donator ${donator.name} who donates ${amount} dollars.`);
        this.coin += amount;
    }
}

class Owner{
    constructor(
        public name:string,
        public moneyPocket: MoneyPocket,
    ){

    }

    returnCoin():string{
        return `The owner ${this.name} has ${this.moneyPocket.coin}`;
    }
}


const eliMoneyPocket = new MoneyPocket(200);
const kotoriMoneyPocket = new MoneyPocket(200);

const eli = new Owner("Ayase Eli",eliMoneyPocket);
const kotori = new Owner("Minami Kotori",kotoriMoneyPocket);

eli.moneyPocket.deposit(500);

kotori.moneyPocket.deposit(100,eli);
