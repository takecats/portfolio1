// JavaScript source code

const navbtn = document.getElementById('nav_b');
const navp = document.getElementById('nav_p');
var hamtog = document.getElementById('ham_base');
var hamhaba = document.getElementById('ham_menu');
var hamhabb = document.getElementById('snss');


hamtog.style.right = '-' + window.innerWidth + 'px';
hamtog.style.width = window.innerWidth + 'px';

if (window.innerWidth < 1500) {
    hamhaba.style.width = window.innerWidth + 'px';
    hamhabb.style.width = window.innerWidth + 'px';
} else {
    hamhaba.style.width = window.innerWidth * 0.6 - 5 + 'px';
    hamhabb.style.width = window.innerWidth * 0.3 - 5 + 'px';
};



navbtn.addEventListener('click', function () {
    if (hamtog.style.right == '-' + window.innerWidth + 'px') {
        hamtog.style.right = 0 + 'px';
        navbtn.classList.add('hamoff');
        navp.classList.add('hamoff');
    } else {
        hamtog.style.right = '-' + window.innerWidth + 'px';
        navbtn.classList.remove('hamoff');
        navp.classList.remove('hamoff');
    };
});
