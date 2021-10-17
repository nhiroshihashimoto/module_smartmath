    import * as Parentheses from './parentheses.js';
    import * as Operator from './operator.js';

    export function calc(lastArr,arr,showSequence,recursive,decimal){

        if( Parentheses.have(arr) ){
            Parentheses.resolve(lastArr,arr,showSequence,recursive,decimal);
            calc(lastArr,arr,showSequence,recursive,decimal);
        } else if( Operator.have(arr,'mult') ){
            Operator.resolve(lastArr,arr, 'mult',showSequence,recursive,decimal);
        } else if( Operator.have(arr,'plus') ){
            Operator.resolve(lastArr,arr, 'plus',showSequence,recursive,decimal);
        }

        return arr;
    }
