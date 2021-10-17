    import {allOperators} from './calculate.js';

    export function equation(showSequence,input){
        if(showSequence){
            var outString = '';
            for(var i = 1; i < arguments.length; i++){
                outString += arguments[i] + ' ';
            }
            console.log('Tratamento: ', outString);
        }
    }

    export function result(showSequence,input){
        if(showSequence){
            console.log('Resultado:',input);
        }
    }

    export function currentEquation(showSequence, input){
        if(showSequence){
            var outString = '';
            for(var i = 0; i < input.length; i++){
                if(input[i].match(allOperators)||input[i] ==='('||input[i] ===')'){
                    outString += ' ' + input[i] + ' ';
                    continue;
                }
                outString += input[i];
            }
            console.log('Equação atual: ', outString);
        }
    }