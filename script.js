// Task №1


// Напишите функцию range, принимающую два аргумента, начало и конец
// диапазона, и возвращающую массив, который содержит все числа из него,
// включая начальное и конечное.

// let arr=[];

// function range(str, fnsh){
//     for (let i=str; i<=fnsh; i++ ){
//         arr.push(i);
//     }
//     return arr;
// }

// Task №2

// Напишите функцию sum, принимающую массив чисел и
// возвращающую их сумму. 


// function sum(arr){
//     range;
//     let rez=0;
//     for (let i=0; i<arr[arr.length-1]; i++){
//         rez+=arr[i];
//     }
//     return rez;
// }



// Task №3


// В качестве бонуса дополните функцию range, чтобы она могла принимать
// необязательный третий аргумент – шаг для построения массива. Если он не
// задан, шаг равен единице.Убедитесь, что она работает с отрицательным шагом




// function range(str, fnsh, stp){
//     if (stp<0){
//         for (let i=fnsh; i>=str; i+=stp ){
//             arr.push(i);
//         }
//      } else { if (stp>0) {
//             for (let i=str; i<=fnsh; i+=stp ){
//                 arr.push(i);
//             }
//         }
//     }
//     return arr;
// }
// console.log(range(1,10,-2));





// Рандом между числами с округлением






function getRandom(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(getRandom(10,20));




