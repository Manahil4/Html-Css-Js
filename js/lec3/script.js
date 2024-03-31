//all of things are similar as python and c almost syntax is same as c  

//for loop ; most recently used loop
for (let i =1;i<=5;i++){
    console.log('by loop')
}
//calculate sum of 1 to 5
let sum=0;
for (let i=1;i<=5;i++){
    console.log('sum of ',sum,'and',i,'=',sum+=i);
}
console.log('Sum of five nos',sum)

//while loop only checks condition at start
{let i=1;
while (i<=2){
    console.log('dodo');
    i++;
}}
//do while atleast 1 time body is executed then condition checks
{
    let i=1;
    do{
        console.log('astagfirulaa');
        i++;
    } while(i<=100)
}


//to iterate on special type of data
let str='js';
//iterator is a charachter that is val
for (let val of str ){
    console.log('alphabets in js are ;',val);

}
// for in use object for loop
const mano={
    Name:'Manahil',
    Accomplishment:'Cis',
    Uni:"Ned",
} 
for (let key in mano){
    console.log('key=',key,'value=',mano[key])
}

