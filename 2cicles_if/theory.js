
// view
let month = 'April';
if (month === 'September') {
  console.log(`It’s time to learn!`);
} else {
  console.log(`Continue chilling`);
}

// short option (syntax sugar)

let age = prompt('how old are you?');
let isAllow;
if (age > 18) {
  isAllow = true;
} else {
  isAllow = false;
}
// ----> 
let age2 = prompt('Скільки вам років?');
let isAllow2 = age > 18 ? true : false;

//switch

let colour = 'yellow';
switch (colour) {
  case 'red': 
    console.log('Stay here!');
    break;
  case 'yellow':
    console.log('Wait for it');
    break;
  default: 
    console.log('Now, you go');
    break;
}

//while and do while
let mark = 4;
while(mark < 5) {
  console.log(`Mark: ${mark}`);
  mark++;
}

let mark2 = 6;
do {
  console.log(`Mark: ${mark}`);
  mark2++;
} while (mark2 < 5);

// the difference is do while will be performed once at least in any case (false)
// because of sequence: body first 

// FOR
for (let i = 1; i > 4; i--) {
  console.log(`Mark: ${i}`);
}

