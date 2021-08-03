'use strict';
let welcomeMsg = prompt('Hello and welcome to my about me site! May I ask what is ur name?');
document.write('<h3> Welcome '+welcomeMsg+'!</h3>')

let firstQ = prompt('Is my name Ismael?Answare with y/n');
if (firstQ !== null){
    firstQ = firstQ.toLowerCase();
}
switch(firstQ){
    case'y':
    alert('You got that right! good job!')
    console.log(firstQ+' that is right!');

    break;
    case 'n':
        alert('You got that wrong sad!')
        console.log(firstQ+' wrong answare!');
        break;
    default:
        alert('you didnt answare with yes or no');
        break;
}
let seconedQ = prompt('Am I Britain?Answare with y/n');
if (seconedQ !== null){
    seconedQ = seconedQ.toLowerCase();
}
switch(seconedQ){
    case'n':
    alert('You got that right! good job!')
    console.log(seconedQ+' that is right!');
    break;
    case 'y':
        alert('You got that wrong sad!')
        console.log(seconedQ+' wrong answare!');
        break;
    default:
        alert('you didnt answare with yes or no');
        break;
}
let thirdQ = prompt('Did I study at Prince Hamzah School?Answare with y/n');
if (thirdQ !== null){
    thirdQ = thirdQ.toLowerCase();
}
switch(thirdQ){
    case'y':
    alert('You got that right! good job!')
    console.log(thirdQ+' that is right!');
    break;
    case 'n':
        alert('You got that wrong sad!')
        console.log(thirdQ+' wrong answare!');
        break;
    default:
        alert('you didnt answare with yes or no');
        break;
}
let fourthQ = prompt('Am I studying at Ltuc?Answare with y/n');
if (fourthQ !== null){
    fourthQ = fourthQ.toLowerCase();
}
switch(fourthQ){
    case'y':
    alert('You got that right! good job!')
    console.log(fourthQ+' that is right!');
    break;
    case 'n':
        alert('You got that wrong sad!')
        console.log(fourthQ+' wrong answare!');
        break;
    default:
        alert('you didnt answare with yes or no');
        break;
}
let fifthQ = prompt('Do I like to work as a cook in the future?Answare with y/n');
if (fifthQ !== null){
    fifthQ = fifthQ.toLowerCase();
}
switch(fifthQ){
    case'n':
    alert('You got that right! good job!')
    console.log(fifthQ+' that is right!');
    break;
    case 'y':
        alert('You got that wrong sad!')
        console.log(fifthQ+' wrong answare!');
        break;
    default:
        alert('you didnt answare with yes or no');
        break;
}
alert('I hope you liked my about me site Mr.'+welcomeMsg+'!')