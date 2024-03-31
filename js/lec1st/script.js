// // we will learn in this js course about dom, buttons interactivity, id , selectors
// // for webpagge like frontend
// alert("hello") 
// // creates alert on webpage
// console.log("code is running meflew..")
// console.log("i am console..")
// // it makes debugging very easy 

// var ar=prompt("Enter your number")
// // take input in prompt
// console.log("your no is" + ar)

// var isTrue = confirm("Leave this page")

// if (isTrue){
//     console.log("Blast")
// }
// else{
//     console.log("Continue...")
// }
// // in browser you can use prompt,confirm and alert 

// document.title="mano's web"
// document.body.style.backgroundColor ="red"
// // can add inline css elements

// // variables are containers for data, variable name is memory address and its value is stored in that address of memory , data structure of different size
// let ai;
// let xu;
// let yj;

// ai=4;
// xu=null;
// yj=undefined;
// // undefined have no value but null have value which is not available right now
// console.log(xu,ai,yj);

// // js is dynamically typed language
// let ra="sd";
// console.log(ra)
// // boolean data type: true or false
// isFollow=true;
// console.log(isFollow);

// // Var Rules
// // Case sensitive
// // donot do it as it will create confusion
// let name="Manahil";
// let Name="ejaz";
// console.log(name);
// console.log(Name);

// // Allowed : Letters(alphabets), digits(numbers), underscore(_)and $ 
// let e=2;
// let s3=3;
// let s$=2;
// //first item that is Allowed: letters, $, _  
// // Not Allowed for first item:digits
// let $e=3;
// let _3r=3;
// let _3=1;
// let __=0;
// console.log($e,s$,_3,_3r,__)
// // not Vriable names;reserved keywords
// // console="sds";
// // console.log(console);
// // Comment out due to console is reserved kewwordand it will show error 
// Console='sd';
// console.log(Console);
// // remember Case Sensitive

// // var, let, const
// // mostly used nowadys:let, const. var use in olden days
// name="as";
// console.log(name);

// // var can be redeclared and updated
// var ax=2;
// var ax=3;
// var ax=4;
// console.log(ax);
// // see a is declared 3 times in memory , 3 separate memory location for a and previous value is updated with newer one 

// let a=2;
// a=3;
// a=4;
// console.log(a);
// // let cannot redeclared but can update its value in same memory location

// const asz=3;
// // asz=4; not possible

// let fs;
// console.log(fs);
// // HERE fs is declared but not defined so fs is undefined

// // const s;
// // console.log(s);
// // here it will raise error , const must be defined at time of declaration

// // block={ 1 code}, let and const are block scope

// // {
// //     let f=2; inside block let and const can bw decalared once according to their property concerned
// //     let f=3;raise error
// // }
// {
//     let aq=3;
//     console.log(aq);
// }
// {
//     let aq=2;
//     console.log(aq);
// }
// // Data Types in JS
// // Primitve(7):
// // number for int, string for alphabets, boolean for true or false, Undefined for declared only variable, object for Null (shows no value is assigned to it) , not frequently used are: BigInt and symbol
 // let ag;
// let ename='s';
// let ec=null;
// let big=BigInt("2314");
// let greet=Symbol("hy");
// console.log(typeof ename, typeof ec, typeof ag, typeof big, typeof greet);

// // Object collection of different variables stored as key and values pair
// const std={
//     f_name:"Mano Ejaz",
//     age: 24,
//     cgpa:3.5,
// };
// //below updating key of any const obj is allowed but not const and for obj updating means to reinitialize object somewhere in memory
// std["cgpa"]=std["cgpa"]+0.3;

// //string when concatinates with other returning element is string as well
// asd='yy';
// hu=98;
// asdhu=asd+hu;
// console.log(typeof asdhu);