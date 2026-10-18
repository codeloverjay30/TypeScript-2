class Owner{
    constructor(public name:string){

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
}

class Car extends Vehicle{
    constructor(
        name:string,
        owner: Owner,
        age: number
    ){
        super(4,name,owner,age);
    }

    sell(to:Owner){
        this.owner = to;
    }
}

const eli = new Owner("Ayase Eli");
const kotori = new Owner("Minami Kotori");

const eliCar = new Car("apple",eli,3);
const kotoriCar = eliCar;

console.group('eliCar');
console.log(eliCar);
console.groupEnd();

console.group('kotoriCar');
console.log(kotoriCar);
console.groupEnd();

kotoriCar.sell(kotori);

console.group('eliCar');
console.log(eliCar);
console.groupEnd();

console.group('kotoriCar');
console.log(eliCar);
console.groupEnd(); 
