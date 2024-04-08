// array;collection of data of a specified class;data can be  hterogenous and homogenous, mutable 
let marks=[443,342,354];
// console.log('marks',marks,'typeof ',typeof marks);

// // Indices in Arrays ;marks[0]=443
// console.log(marks[4]);//undefined
// // if index out of range undefined will print like for above case
// marks[0]=234;
// console.log(marks[0]);//234
// // loops;iterable(array, str,object)
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }
// //for-of
// for(let mark of marks){
//     console.log(mark);
// }
// marks.pop();
// console.log(marks);
// marks.push(34,54);
// console.log(marks);
// marks=marks.toString();
// console.log(typeof marks, marks, typeof marks[0],marks);

// let percent=[67,64,77,34,26];
// let result=marks.concat(percent);
// console.log(result);
marks.shift();//delete 1st element
console.log('delete 1st element',marks);
marks.unshift(11);//add to start
console.log('add 11 at start',marks);

