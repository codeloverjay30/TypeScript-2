function printOperationResult(x,y){

    console.groupCollapsed('printOperationResult');
    console.log(x);
    console.log(y);
    console.log(x == y);
    console.log(x != y);
    console.groupEnd();
}

printOperationResult("7","5");