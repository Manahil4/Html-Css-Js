// console.log('df');
// console.log(window);//window object is created by browsers not by us 
// window.console.log('dsfwgrhdr');// window object have console.log and dir
//js can access html code , js have object (window object), inside window object there is a document object that have  html code
console.log(window.document);//console.log for printing html code
console.dir(window.document);//console.dir for printing document (properties and methods)
//dom; Tree like structure (nodes, branches), html model(visual representation)
//hierarchical structure; Window->Document-> html-> two childs ;head and body and each child have other subchilds
console.log(document.body);
console.dir(document.body);