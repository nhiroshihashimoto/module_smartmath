    import * as Equation from './operations/equation.js';
    import * as Filter from './filter/filter.js';

    export function resolve(input,showSequence,decimal,dotToComma){
        var arr = Filter.inputEquation(input);
        arr = arr.split('');
        start(showSequence);
        if(haveEquation(arr)){
            show(showSequence,input);
            var result = Equation.calc(arr,arr,showSequence,false,decimal);
    
    
            if(dotToComma){
                result = Filter.dotToComma(result);
            }
    
            result = Filter.outputEquation(result);
            return result;
        }
        return input;
    }

    export function haveEquation(input){
        var calc = input.toString();
        if(calc.match(/[\d+−\-\*x\/÷()]/g)){
            if(calc.match(/[\d]/g)){
                return true;
            }
        }
        return false;
    }

    function show(showSequence,input){
        if(showSequence){
            console.log('Equação encontrada:', input);
        }
    }

    function start(showSequence){
        if(showSequence){
            console.log('----------- Start -----------');
        }
    }