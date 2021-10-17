    import * as HandleEquation from './order/handleEquation.js';
    import * as Equation from './equation.js';
    import * as Number from './order/numbers.js';
    import * as Calculate from './calculate.js';
    import * as Range from './order/range.js';
    import * as Show from './show.js';

    export function resolve(lastArr,arr,showSequence,recursive,decimal){
        var lastOParentheses = getLastOParentheses(arr);
        var firstCParentheses = getFirstCParentheses(arr);
        var inside = HandleEquation.cut(arr, lastOParentheses, (firstCParentheses - lastOParentheses + 1));
        if(inside[0] === '(' && inside[inside.length-1] === ')'){
            HandleEquation.cutBorders(inside);
            var result = Equation.calc(lastArr,inside,showSequence,true,decimal);
            HandleEquation.putBorders(inside);
            HandleEquation.put(arr, result, lastOParentheses);
            Show.currentEquation(showSequence,arr);
        }
        firstCParentheses = getFirstCParentheses(arr);

        if(!verifyOperationInArray(arr,lastOParentheses,firstCParentheses)){
            if(verifyNumberLeft(arr, lastOParentheses)){
                if(verifyNumberRight(arr,firstCParentheses)){
                    HandleEquation.put(arr,'*',firstCParentheses+1);
                }
                resolveParenthesesWithNumberLeft(lastArr,arr,lastOParentheses,firstCParentheses,showSequence);
            } else{
                removeParentheses(lastArr,arr,lastOParentheses,firstCParentheses);
            }
        }

        Equation.calc(lastArr,arr,showSequence,recursive,decimal);
    }

    export function have(arr){
        var rx = /\(/g;
        var string = arr.join('');
        return rx.test(string);
    }

    function removeParentheses(lastArr,arr,lastOParentheses,firstCParentheses){
        if(Calculate.isOperator(arr,lastOParentheses - 1)){

            HandleEquation.cut(arr,lastOParentheses,1);
            firstCParentheses = getFirstCParentheses(arr);
            if(Calculate.isOperator(arr,firstCParentheses + 1)){
                HandleEquation.cut(arr,firstCParentheses,1);
            }

        }
    }

    function resolveParenthesesWithNumberLeft(lastArr,arr,lastOParentheses,firstCParentheses,showSequence){
            var firstNumber = Number.getFirst(arr, lastOParentheses);
            var startPoint = Range.getStart(arr, lastOParentheses);
            var secondNumber = Number.getSecond(arr, lastOParentheses, firstCParentheses);
            var result = Calculate.calculate('*',firstNumber,secondNumber,'auto');
            var value = Array.from(String(result), String);

            Show.equation(showSequence, firstNumber, '*',secondNumber );
            Show.result(showSequence,value.join(''));

            HandleEquation.cut(arr,startPoint,(firstCParentheses - startPoint + 1));
            HandleEquation.put(arr, value, startPoint);
    }

    function verifyOperationInArray(arr,lastOParentheses,firstCParentheses){
        for(var i = lastOParentheses; i <= firstCParentheses; i++){
            if(arr[i].match(Calculate.allOperators)){
                return true;
            }
        }
        return false;
    }

    function verifyNumberLeft(arr, lastOParentheses){
        return arr[lastOParentheses-1].match(/\d/g);
    }

    function verifyNumberRight(arr, firstCParentheses){
        return arr[firstCParentheses+1].match(/\d/g);
    }

    function getLastOParentheses(arr){
        var lastOParentheses = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] ==='('){
                lastOParentheses = i;
            }
        }
        return lastOParentheses;
    }

    function getFirstCParentheses(arr){
        for(var i = arr.length; i >= 0; i--){
            if(arr[i] ===')'){
                return i;
            }
        }
        return arr.length;
    }