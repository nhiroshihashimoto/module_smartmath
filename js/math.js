    import * as Resolve from './resolve/resolve.js';

    // ------------ Configs ------------
    var showSequence = false;
    var decimal = 'auto'; // ('auto', 0, 1, 2...)
    var dotToComma = true;

    // ------------ Function ------------
    function resolve(input){
        return Resolve.resolve(input,showSequence,decimal,dotToComma);
    }



    // ------------ Examples ------------
    // Simple
    var simple = '3*5';
    console.log('Result:', resolve(simple));

    //Just add your equation
    var equacoes = [
        '421+42',
        '42+12(34*2*4)40,2*4',
        '13*(24+2*4)+4,6*6,3',
        '12*(30)+',
        'Equação errada'
    ];

    equacoes.forEach((obj)=>{console.log('Equation:', obj, '=', resolve(obj))});