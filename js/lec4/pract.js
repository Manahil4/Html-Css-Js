// find avverage of entire class. marks of whole class;[32,55,76,87,98,35,67]
let marks=[32,55,76,87,98,35,67];
let sum=0;
let average=0;
for(let mark of marks){
    sum+=mark;
    console.log(sum)
}
console.log(marks.length, sum);
average=sum/marks.length;
console.log('average', average);

// Array of prices;[250,645,300,900,50]. Apply 10%off on each item. Change Array to store deducted price after applying offer.
let price=[250,645,300,900,50];
let offer=0.1;
// for (let item of price){
//     item=item-(item*offer);//only changing item itself which is a variable containing previously value of array not changing arrays values 
//     console.log(price);//as array need index to change its value
// }
// for(let i=0;i<price.length;i++){
//     price[i]=price[i]-(price[i]*offer);
// }
// console.log('Price after discount deducted',price);
let index=0;
for(let val of price){
    console.log(val);
    price[index]=price[index]-(price[index]*offer);
    index++;
}
console.log('Price after discount deducted',price);
