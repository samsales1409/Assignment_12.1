//example of pure function
function counterReducer(actionType,counter){

    if(actionType=='INC'){
        counter=counter+1;
        return counter;
    }

    if(actionType=='DEC'){
        counter=counter-1;
        return counter;
    }
}
console.log(counterReducer('INC',5));
console.log(counterReducer('DEC',5));