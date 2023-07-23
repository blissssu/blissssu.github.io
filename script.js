const b = document.querySelector('button.button--no')
b.addEventListener("mouseover", moveClick)

var x = ["Hehe di pwede mapindot", "wag mo na ideny", "I know na ikaw yan"]

function moveClick() {
    var randomIndex = Math.floor(Math.random() * x.length);
    var randomWord = x[randomIndex];

    b.innerHTML = randomWord;
    const i = Math.floor(Math.random()*300)+1;
    const j = Math.floor(Math.random()*300)+1;

    b.style.left = i + "px"
    b.style.top = j + "px"
}

let z = 0;
var word = ["Weh?", "Sure ka ba?", "Weh di ngaa", "Sigurado ka ba dyann", "Sige na nga click mo na"]

const a = document.querySelector('button.button--yes')
a.addEventListener("click", function () {
   if (z != 5) {
    var randomWord = word[z];

    a.innerHTML = randomWord;
    const i = Math.floor(Math.random()*300)+1;
    const j = Math.floor(Math.random()*300)+1;

    a.style.left = i + "px"
    a.style.top = j + "px"
    z += 1;
   }
   else if (z == 5) {
    window.location.replace('main.html');
   }
})