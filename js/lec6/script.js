// // console.log('df');
// // console.log(window);//window object is created by browsers not by us 
// // window.console.log('dsfwgrhdr');// window object have console.log and dir
// //js can access html code , js have object (window object), inside window object there is a document object that have  html code
// console.log(window.document);//console.log for printing html code
// console.dir(window.document);//console.dir for printing document (properties and methods)
// //dom; Tree like structure (nodes, branches), html model(visual representation)
// //hierarchical structure; Window->Document-> html-> two childs ;head and body and each child have other subchilds
// console.log(document.body);
// console.dir(document.body);
// console.dir(document.head);


// // Dom Manipulation
// // for dynamic / runtime changes in websites(frontend i.e. html, css code ) , html , css are static 
// let heading =document.getElementById("heading");
// //accessing in terms of object 
// console.dir(heading);//tagname+id
// let cls=document.getElementsByClassName("hd");
// //if wrong class name commented code wil be printed 

// console.dir(cls);//HTMLCollection(0)
// console.log(cls);// HTMLCollection []
// //html collection is like an array 
// let paras=document.getElementsByTagName("p");
// console.dir(paras);
////querySelectorAll;returns Nodelist of same class or same tag elements in code. cannot use for ids as they are unique not multiple elemwts associated with a single id. querySelector;returns 1st node from nodelist of elements ,use with id, class , tag
// let frstelement=document.querySelector('p');
// console.dir(frstelement);
// let allelement=document.querySelectorAll('p');
// console.dir(allelement);

// let frstcl=document.querySelector(".hd");
// console.dir(frstcl);
// let allcl=document.querySelectorAll(".hd");
// console.dir(allcl);
// let node_id=document.querySelector("#heading");
// console.dir(node_id);
// let butnId=document.querySelector("#butn");
// console.dir(butnId);
// console.log(butnId.tagName);//returns tagname of node 
// console.log(allelement.tagName);//undefine for collective nodelist elements name as tags can be different

// // when making dom tree ignore text and comment node only work on elements tag of html. fist child (leftmost) property, last child(rightmost), use for navigation
// console.dir(document.body.firstChild);//whitespaces are considered as text tag and if just after body there are spaces  considered as first child.as dom includes text, comment and html element for node
// let divTag=document.querySelector("div").children
// console.dir(divTag);
// let sec=document.querySelector("section");
// console.log(sec.innerText);
// console.dir(sec.innerText);
// console.log(sec.innerHTML);
// console.dir(sec.innerHTML);
// sec.innerText='dsfs';
// console.log(sec.innerHTML, sec.innerText);

let para=document.querySelectorAll("p");
para.forEach(para =>{
    console.log(para.innerText);
});
let hid=document.getElementById("heading");
console.log(hid);