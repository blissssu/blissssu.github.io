let rock_1 = document.getElementById('rock1');
let rock_2 = document.getElementById('rock2');
let moon = document.getElementById('moon');
let stars = document.getElementById('star');
let header = document.getElementById('title');
let land = document.getElementById('land');
let ps1 = document.getElementById('p1');
let ps2 = document.getElementById('p2');
let ps3 = document.getElementById('p3');
let ps4 = document.getElementById('p4');
let ps5 = document.getElementById('p5');
let ov = document.getElementById('overlay');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    rock_1.style.top = value * -0.2 + 'px';
    rock_2.style.top = value * -0.2 + 'px';
    land.style.top = value * -0.2 + 'px';
    moon.style.top = value * -1.5 + 'px';
    header.style.opacity = value * 0.009;
    header.style.left = value * 1.8 + 'px';
    stars.style.left = value * -1 + 'px';
    ps1.style.top = value * 1 + 'px';
    ps5.style.left = value * 1 + 'px';
    ps2.style.top = value * 1 + 'px';
    ps3.style.left = value * 1 + 'px';
})

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    ps1.style.top = value * 0.073 + 'px';
    ps5.style.left = value * -0.073 + 'px';
    ps3.style.top = value * -0.073 + 'px';
    ps2.style.left = value * 0.073 + 'px';
})

// github lang to sir hehe
var typed = new Typed(".multiple-text", {
    strings: ["High thermal insulation.", "Acoustic insulation.", "Environmentally friendly.", "Lightweight."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// var mode =  'dark'
// function light() {
//     let pf1 = document.getElementById('prof1');
// let pf2 = document.getElementById('prof2');
// let pf3 = document.getElementById('prof3');
// let pf4 = document.getElementById('prof4');
//     if (mode == 'dark') {
//         home.style.backgroundColor = 'white'
//         home.style.color = 'black'
//         about.style.backgroundColor = 'white'
//         about.style.color = 'black'
//         works.style.backgroundColor = 'white'
//         works.style.color = 'black'
//         change4.style.backgroundColor = 'white'
//         more.style.backgroundColor = 'white'
//         more.style.color = 'black'
//         pf1.style.backgroundColor = 'white';
//         pf2.style.backgroundColor = 'white';
//         pf3.style.backgroundColor = 'white';
//         pf4.style.backgroundColor = 'white';
//         ov.style.borderTop = '374px ridge purple';
//         latest.style.backgroundColor = 'white';
//     }
// }