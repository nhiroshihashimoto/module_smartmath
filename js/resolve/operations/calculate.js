    import * as Number from './order/numbers.js';
    import * as Show from './show.js';

    export var allOperators = /[x\*÷\/+−\-]/g;
    export var multOperator = /[x\*÷\/]/g;
    export var plusOperator = /[+−\-]/g;

    export function equation(lastArr,arr,opPosition,showSequence,recursive,decimal){
        var operator = arr[opPosition];
        var firstNumber = Number.getFirst(arr, opPosition);
        var secondNumber = Number.getSecond(arr, opPosition, arr.length);
        var calc = calculate(operator,firstNumber,secondNumber,decimal);
        var value = Array.from(String(calc), String);
        
        lastArr = arr;
        if(!recursive){
            Show.currentEquation(showSequence, lastArr);
        }
        Show.equation(showSequence, firstNumber,operator,secondNumber);
        Show.result(showSequence,value.join(''));

        return value;
    }

    export function calculate(op,firstNumber,secondNumber,decimal){
        if(decimal === 'auto'){
            return Math.round(resolve[op](firstNumber,secondNumber)*100)/100;
        }
        if(typeof decimal === 'number'){
            return resolve[op](firstNumber,secondNumber).toFixed(decimal);
        }
        return resolve[op](firstNumber,secondNumber);
    }

    export function isOperator(arr,location){
        if(arr[location]){
            if(arr[location].match(allOperators)){
                return true;
            }
        }
        return false;
    }

    const resolve = {
        '+' : function( x, y ){ return +x + +y },
        '−' : sub,
        '-' : sub,
        'x' : mult,
        '*' : mult,
        '÷' : div,
        '/' : div
    }

    function sub(x,y){return +x - +y}

    function mult(x,y){return x * y}

    function div(x,y){x / y}