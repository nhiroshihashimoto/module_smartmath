    import * as Number from './numbers.js';

    export function getStart(arr, operatorPosition){
        var startPoint = '';
        for(var i = (operatorPosition - 1); i >= 0; i--){
            if( Number.isNumber(arr[i]) ){
                startPoint = i;
            } else{
                break;
            }
        }
        return startPoint;
    }

    export function getEnd(arr, operatorPosition){
        var endPoint = '';
        for(var i = ++operatorPosition; i < arr.length; i++){
            if( Number.isNumber(arr[i]) ){
                endPoint = i;
            } else{
                break;
            }
        }
        return endPoint;
    }