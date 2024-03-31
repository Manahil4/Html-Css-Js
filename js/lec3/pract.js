//print even nos from 1 to 100

// for (let i=0;i<=100;i+=2){
//     console.log(i);
// }
//Another method
for (let i=0;i<=100;i++){
    if (i%2===0) {console.log(i);}
}

//Q2 Create game for user where you asked user to guess no until the user enters correct value
let gameno=34;
// do{
//     userno=prompt('Guess no;');
// } while (userno!=gameno)
// alert('Correct!');
let userno=prompt('Guess no;');
while (userno!=gameno){
    userno=prompt('wrong!!!!'+
    'enter again;');
}alert('Correct!');