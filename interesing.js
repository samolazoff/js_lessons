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



// *****************************************************************************
// sliders



// Для начала сделаем слайдер текста. Этот слайдер будет представлять собой див,
//  в котором каждую секунду будет меняться текст.




// const txt=document.querySelector('#txt');
// let texts = ['text1', 'text2', 'text3'],
//     i=0,
//     getElem=function(){
//         txt.textContent=texts[i];
//         i<2?i++:i=0;
//     };
// setInterval(getElem,2000);

// *****************************************************************************
// Давайте теперь сделаем слайдер текста со стрелками. Это значит, что текст будет меняться
//  не по таймеру, а по нажатию на стрелку. Добавим стрелки в наш HTML код:


const txt=document.querySelector('#txt');
const refs = document.querySelectorAll('a');
let texts = ['text1', 'text2', 'text3'];
let i=0;
refs.forEach(function(ref){
    ref.addEventListener('click', function(event){
        event.preventDefault();
        switch(ref.id){
            case 'left':
                if(i!=0){i--}else{i=0};
                txt.textContent=texts[i];
            break;
            case 'right':
                if(i!=2){i++}else{i=2};
                txt.textContent=texts[i];
            break;
        };
    })
})







    //     if(i!=0 && ref.id==='left'){
    //         i--;
    //         txt.textContent=texts[i];
    //     }else{
    //         i++;
    //         txt.textContent=texts[i];
    //     }
    // })
    // ref.addEventListener('click', function(event){
    //     event.preventDefault();
    //     if(i!=2){
    //         i++;
    //         txt.textContent=texts[i];
    //     }else{
    //         i=2;
    //         txt.textContent=texts[i];
    //     }
    // }) 
