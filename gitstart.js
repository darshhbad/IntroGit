//Examine document object

console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);

//to change document title from script: document.title=123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]); //Not a good way as index changes when you change something in middle
console.log(document.forms);
console.log(document.links);
console.log(document.forms[0]);
console.log(document.images);

//get elements by id

console.log(document.getElementById('header-title'));
let headertitle=document.getElementById('header-title')
console.log(headertitle);
headertitle.textContent='Hello'; //doesn't pay attention to style
headertitle.innerText='Goodbye'; //inner text pays attention to style, say, if style is display:none then it won't show on console
//Innertext gets the content of all elements, including <script> and <style> elements
//But Text content only returns the text value and not the Html tags

headertitle.innerHTML='<h3>Hello<h3>' //doesn't change h1 to h3 but uncludes an h3 inside h1
headertitle.style.borderBottom="solid 3px #000"

let header=document.getElementById('main-header')
header.style.borderBlock="solid 3px #000"

let items=document.getElementsByClassName('title');
console.log(items)
items[0].style.fontWeight='bold';
items[0].style.color='green';






