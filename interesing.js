//********************************************************************************

// Рандом между числами с округлением


// function getRandom(min, max){
//     return Math.floor(Math.random()*(max-min+1)+min);
// }
// console.log(getRandom(10,20));



//********************************************************************************

//short quoted notation



// const name='Romick';
// const age =31;
// function getAge(){
//     return age;
// }
// console.log(`My name is ${name}. I am ${getAge()} years old!!!`);


//********************************************************************************



// DOM

// document.getElementById('hello') //возвращает элемент от тега до тега включая сами теги!!!!
// console.dir(document.getElementById('hello'));//показывает сам элемент и к нему все методы!!!
// console.log(document.getElementById('hello').textContent); 
// document.getElementById('hello').textContent= 'JS';
// document.getElementById('hello').style.color='red';
// document.getElementById('hello').style.textAlign='center';
// document.getElementById('hello').style.fontSize='80px';
// document.getElementById('hello').style.backgroundColor='yellow';


// setTimeout(()=>{
//     document.getElementById('hello').style.textAlign='center';
//     document.getElementById('hello').style.fontSize='80px';
//     document.getElementById('hello').style.backgroundColor='yellow';
// },3000);
// const heading = document.getElementById('hello');
// setTimeout(()=>{
//     addStylesYo(heading);

// },3000);
// function addStylesYo(node){
//     node.style.textAlign='center';
//     node.style.fontSize='80px';
//     node.style.backgroundColor='yellow';

// }
// const heading2 = document.getElementsByTagName('h2')[0]; //обращение по тегу
// const heading2 =document.querySelector('h2') //обращение по CSS через тег
// const heading2 =document.querySelector('#super') //обращение по CSS  через id
// const heading2 =document.querySelector('.puper') //обращение по CSS через class

// console.log(heading2);
// heading.onclick=()=>{
//     console.log(heading.textContent);
// }
// heading2.onclick=()=>{
//     console.log(heading2.textContent);
// }

// const elem= document.querySelector('h1');
// // elem.innerHTML='@@@@';    //changes text of tag
// // elem.innerHTML='<br>Ooops'; //changes text of tag with new tag
// console.log(elem.innerHTML);