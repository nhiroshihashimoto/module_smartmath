    import * as Calculate from './calculate.js';
    import * as Range from './order/range.js';
    import * as HandleEquation from './order/handleEquation.js';

    var rxOperator = Calculate.multOperator;
    
    export function resolve(lastArr,arr,type,showSequence,inside,decimal){
        verifyType(type);
        var opPosition = searchOperatorPosition(arr,type);
        var op = searchOperator(arr,type);
        
        var value = Calculate.equation(lastArr,arr,opPosition,showSequence,inside,decimal);
        var startPoint = Range.getStart(arr, opPosition);
        var endPoint = (Range.getEnd(arr, opPosition) - startPoint);


        replace(arr,value,startPoint,endPoint);
        if(endPoint <= startPoint){
            replace(arr,value,startPoint,arr.length);
        }
    }

    export function have(arr,type){
        verifyType(type);
        var some = arr.some(item=>rxOperator.test(item));
        return some;
    }

    function replace(arr,value,startPoint,endPoint){
        HandleEquation.cut( arr, startPoint, endPoint + 1 );
        HandleEquation.put( arr, value, startPoint );
    }
    
    function searchOperatorPosition(arr){
        for(var i = 0; i < arr.length; i++){
            if(arr[i].match(rxOperator)){
                return i;
            }
        }
    }

    function searchOperator(arr){
        for(var i = 0; i < arr.length; i++){
            if(arr[i].match(rxOperator)){
                return arr[i];
            }
        }
    }
    
    function verifyType(type){
        if(type === 'plus'){
            rxOperator = Calculate.plusOperator;
        } else{
            rxOperator = Calculate.multOperator;
        }
    }