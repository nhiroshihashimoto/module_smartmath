    export function getFirst(arr, operatorPosition){
        var firstNumber = '';
        for(var i = (operatorPosition - 1); i >= 0; i--){
            if( isNumber(arr[i]) ){
                var temp = firstNumber;
                firstNumber = arr[i] + temp;
            } else{
                break;
            }
        }
        return firstNumber;
    }

    export function getSecond(arr, operatorPosition,lastPosition){
        var secondNumber = '';
        for(var i = ++operatorPosition; i < lastPosition; i++){
            if( isNumber(arr[i]) ){
                secondNumber+= arr[i];
            } else{
                break;
            }
        }
        return secondNumber;
    }
    
    export function isNumber(prop){
        var rx = /[\d\.]/g;
        var test = rx.test(prop);
        return test;
    }