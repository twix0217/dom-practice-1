// Query Selectors
const sun = document.querySelector('.fa-sun');
const moon = document.querySelector('.fa-moon')
const light = document.querySelector('.lightmode');
const dark = document.querySelector('.darkmode');

function lightMode(){
    light.className='lightmode'
}
function darkMode(){
    dark.className='darkmode'
}

function mouse(){
    sun.style.borderBottom = '3px solid orangeRed'
}
function mouseout(){
    sun.style.borderBottom = ''
}

function mouse2(){
    moon.style.borderBottom = '3px solid orangeRed'
}
function mouseout2(){
    moon.style.borderBottom = ''
}




sun.addEventListener('click',lightMode);
sun.addEventListener('mouseenter',mouse);
sun.addEventListener('mouseout' ,mouseout)
moon.addEventListener('mouseenter',mouse2);
moon.addEventListener('mouseout' ,mouseout2)
moon.addEventListener('click',darkMode);



