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




//********************************************************************************

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

//********************************************************************************


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


//********************************************************************************


// Task №5
// Рандом между числами с округлением


// function getRandom(min, max){
//     return Math.floor(Math.random()*(max-min+1)+min);
// }
// console.log(getRandom(10,20));



//********************************************************************************


// Task №6
//short quoted notation



// const name='Romick';
// const age =31;
// function getAge(){
//     return age;
// }
// console.log(`My name is ${name}. I am ${getAge()} years old!!!`);


//********************************************************************************


// Task №7

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.




// function findShort(s){
//     let arr=[];
//     let all=[];
//     for(let i=0 ; i<s.length; i++){
//         if(s.charAt(i)===' '){
//             arr.push(i)}
//         }
        
//     arr.push(s.length);
//     console.log(arr);

//     all.push(arr[0]);
//     for(let i=arr.length-1; i>0; --i){
//         all.push(arr[i]-arr[i-1]-1);
//     }
//     console.log(all);  
//     return Math.min.apply(null, all);
// }










 
// function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
//   }






//********************************************************************************

// Task №8


// changes over time


// let i=0;
// setInterval(function(){
//     console.log(++i)
// }, 1000)






// let i=0;
// const interval = setInterval(function(){
//     i===5?clearInterval(interval):console.log(++i)
// },1500);


//********************************************************************************


// Task №9


// You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.
// The array is unsorted.
// An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] 
// would not be valid as it is missing 3.
// You should return the duplicate value as a single integer.


// function findDup( arr ){
//     let duplicateValue=0;
//     for(let i=1; i<arr.length; i++){
//       let rep=0;
//       for(let num of arr){
//        if(i===num){rep++}
//          if(rep>1){
//            duplicateValue=i;
//            break;
//         }
//        }
//         if(rep>1){
//            duplicateValue=i;
//            break;
//         }
//     }
//     return duplicateValue;
//   }



//********************************************************************************



// Task №10


//   Дана переменная со значением 5px и переменная со значением 6px. 
//   Найдите сумму пикселей из значений этих переменных и выведите ее на экран.


// const a='5px',
//     b='6px';
// console.log(parseInt(a)+parseInt(b));


//********************************************************************************



// Task №11


//  Дана переменная со значением 5.5px и переменная со значением 6.25px.
// Найдите сумму пикселей из значений этих переменных и выведите ее на экран.
// До второй запятой.

const a='5.5px',
    b='6.2525px';
console.log((parseFloat(a)+parseFloat(b)).toFixed(2));


//********************************************************************************
