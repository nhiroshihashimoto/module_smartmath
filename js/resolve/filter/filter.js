    var finalClean = /[x\*÷\/+−\-\(\)]+/g;
    var startClean = /^[x\*÷\/\-\(\)]+/g;

    export function inputEquation(input){
        var filtered = input.toString();
        filtered = filtered.replace( /[\.\s]/g, '' );
        filtered = filtered.replaceAll( /[a-z]/gmi, '' );
        return filtered.replace( /[\,]/g, '.' );
    }

    export function dotToComma(input){
        return input.join('').replace( /[\.]/g, ',' ).split('');
    }

    export function outputEquation(input){
        var filtered = input.join('').replace( finalClean, '' );
        filtered = filtered.replace( startClean, '' );
        return filtered;
    }