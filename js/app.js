'use strict';
let welcomeMsg = prompt('Hello and welcome to my about me site! May I ask what is ur name?');
document.write('<h3> Welcome ' + welcomeMsg + '!</h3>')

let firstQ = prompt('Is my name Ismael?Answare with y/n');
if (firstQ !== null) {
    firstQ = firstQ.toLowerCase();
}
switch (firstQ) {
    case 'y':
        alert('You got that right! good job!')
        console.log(firstQ + ' that is right!');

        break;
    case 'n':
        alert('You got that wrong sad!')
        console.log(firstQ + ' wrong answare!');
        break;
    default:
        alert('you didnt answare with yes or no');
        break;
}
let seconedQ = prompt('Am I Britain?Answare with y/n');
if (seconedQ !== null) {
    seconedQ = seconedQ.toLowerCase();
}
switch (seconedQ) {
    case 'n':
        alert('You got that right! good job!')
        console.log(seconedQ + ' that is right!');
        break;
    case 'y':
        alert('You got that wrong sad!')
        console.log(seconedQ + ' wrong answare!');
        break;
    default:
        alert('you didnt answare with yes or no');
        break;
}
let thirdQ = prompt('Did I study at Prince Hamzah School?Answare with y/n');
if (thirdQ !== null) {
    thirdQ = thirdQ.toLowerCase();
}
switch (thirdQ) {
    case 'y':
        alert('You got that right! good job!')
        console.log(thirdQ + ' that is right!');
        break;
    case 'n':
        alert('You got that wrong sad!')
        console.log(thirdQ + ' wrong answare!');
        break;
    default:
        alert('you didnt answare with yes or no');
        break;
}
let fourthQ = prompt('Am I studying at Ltuc?Answare with y/n');
if (fourthQ !== null) {
    fourthQ = fourthQ.toLowerCase();
}
switch (fourthQ) {
    case 'y':
        alert('You got that right! good job!')
        console.log(fourthQ + ' that is right!');
        break;
    case 'n':
        alert('You got that wrong sad!')
        console.log(fourthQ + ' wrong answare!');
        break;
    default:
        alert('you didnt answare with yes or no');
        break;
}
let fifthQ = prompt('Do I like to work as a cook in the future?Answare with y/n');
if (fifthQ !== null) {
    fifthQ = fifthQ.toLowerCase();
}
switch (fifthQ) {
    case 'n':
        alert('You got that right! good job!')
        console.log(fifthQ + ' that is right!');
        break;
    case 'y':
        alert('You got that wrong sad!')
        console.log(fifthQ + ' wrong answare!');
        break;
    default:
        alert('you didnt answare with yes or no');
        break;
}
alert('I hope you liked my about me site Mr.' + welcomeMsg + '!')
for (let i = 0; i < 4 ; i++){
    let sixthQ = prompt('In ur opinion how old am i?');
    if (sixthQ > 23){
       console.log('nope!');
       alert('Nope that is high!')
    }
    else if(sixthQ < 23){
        console.log('nope');
        alert('Nope that is low!')
    }
    else if (sixthQ = 23){
        console.log('yes!');
        alert('YES!')
        break;
    }   
}
console.log('The correct answer is 23');
for (let i = 0; i < 6 ; i++){
    let hoursTook = [3,4,5]
    let seventhQ = prompt('how many hours did it take me to solve this code xD!');
    if (seventhQ == hoursTook[0]){
        console.log('yes!');
        alert('YES!')
        break;
    }
    else if (seventhQ == hoursTook[1]){
        console.log('yes!');
        alert('YES!')
        break;
    }
    else if (seventhQ == hoursTook[2]){
        console.log('yes!');
        alert('YES!')
        break;
    }
    else{
        console.log('No!');
    }
}
console.log('The correct answers are 3,4,5')
