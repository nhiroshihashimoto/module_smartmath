    export function cut( mainArr, start, toCut){
        var newArr;
        newArr = mainArr.splice(start, toCut);
        return newArr;
    }

    export function cutBorders(mainArr){
        mainArr.shift();
        mainArr.pop();
        return mainArr;
    }

    export function putBorders(mainArr){
        mainArr.unshift('(');
        mainArr.push(')');
        mainArr.splice
    }

    export function put( mainArr, value, start ){
        mainArr.splice( start, 0, ...value, );
    }