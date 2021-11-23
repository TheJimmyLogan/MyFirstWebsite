const myButton = document.querySelector('.mybutton');
const body = document.querySelector('body');
const title = document.querySelector('title');

myButton.addEventListener('click', ()=>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor='#'+randomColor;
    title.innerHTML ='#'+randomColor;
})