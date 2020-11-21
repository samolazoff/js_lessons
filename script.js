// Task №1


// Напишите функцию range, принимающую два аргумента, начало и конец
// диапазона, и возвращающую массив, который содержит все числа из него,
// включая начальное и конечное.

let arr=[];

function range(str, fnsh){
    for (let i=str; i<=fnsh; i++ ){
        arr.push(i);
    }
    return arr;
}

// Task №2

// Напишите функцию sum, принимающую массив чисел и
// возвращающую их сумму. 



function sum(str, fnsh){
    range(str, fnsh);
    let rez=0;
    for (let i=0; i<arr[arr.length-1]; i++){
        rez+=arr[i];
    }
    return rez;
}
console.log(sum(1,10));