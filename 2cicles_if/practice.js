
//1 (learn js cicles #)
for (let i = 2; i <= 10; i++) {
    if (!(i % 2)) {
        alert(i)
    }
};

//2 lJS

let i = 0;
while(i < 3) {
    alert(`namber ${i}`);
    i++;
}

//3 LJS

let num = 0;
do {
    num = prompt('enter the  num which more than 100', 0)

} while (num < 100 && num);

/////LJS IF practice
//1

let answer = prompt('name the official name of JavaScript');

if (answer === 'ECMAScript') {
    alert('right')
} else {
    alert('wrong')
}

//2 
let userNum = Number(prompt('enter the number'));

if (userNum > 0) {
    alert(1);
} else if (userNum < 0) {
    alert(-1);
} else {
    alert(0);
}

//3
let message = (login == 'employee') ? 'hi' :
    (login == 'director') ? 'hello' :
    (login == '') ? 'no login' :
    '';
