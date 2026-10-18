class MoneyPocket{
    private _coin : number
    public get coin(): number{
        return this._coin;
    }
    public set coin( amount: number ){
        if( amount < 0 ){
            console.log('can not set coin as a negative numnber.');
            return;
        }
        this._coin = amount;
    }
    constructor(
        _coin:number
    ){
        this._coin = _coin;
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

eli.moneyPocket.purchase(200);

