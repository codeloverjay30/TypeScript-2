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

class Vehicle{
    wheelCount: number;
    private name:string;
    protected owner: Owner;
    public age: number;
    
    constructor(
        wheelCount:number,
        name:string,
        owner: Owner,
        age: number
    ){
        this.wheelCount = wheelCount;
        this.name = name;
        this.owner = owner;
        this.age = age;
    }
    
    sell(
        to:Owner,
        price:number
    ){
        console.log(`Before purchase, ${to.returnCoin()}`);   
        to.moneyPocket.purchase(price);
        console.log(`After purchase, ${to.returnCoin()}`);   
        this.owner = to;
    }
}

class Car extends Vehicle{
    constructor(
        name:string,
        owner: Owner,
        age: number
    ){
        super(4,name,owner,age);
    }

    override sell(
        to:Owner,
        price:number
    ){
        console.log(`${to.name} buys cars from ${this.owner.name}.`);
        super.sell(to,price);
    }
}

const eliMoneyPocket = new MoneyPocket(200);
const kotoriMoneyPocket = new MoneyPocket(200);

const eli = new Owner("Ayase Eli",eliMoneyPocket);
const kotori = new Owner("Minami Kotori",kotoriMoneyPocket);

const eliCar = new Car("apple",eli,3);
const kotoriCar = eliCar;

console.group('eliCar');
console.log(eliCar);
console.groupEnd();

console.group('kotoriCar');
console.log(kotoriCar);
console.groupEnd();

kotoriCar.sell(kotori,200);

console.group('eliCar');
console.log(eliCar);
console.groupEnd();

console.group('kotoriCar');
console.log(kotoriCar);
console.groupEnd(); 