//Examine document object

// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// //to change document title from script: document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]); //Not a good way as index changes when you change something in middle
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);
// console.log(document.images);

// //get elements by id

// console.log(document.getElementById('header-title'));
// let headertitle=document.getElementById('header-title')
// console.log(headertitle);
// headertitle.textContent='Hello'; //doesn't pay attention to style
// headertitle.innerText='Goodbye'; //inner text pays attention to style, say, if style is display:none then it won't show on console
// //Innertext only returns the text value and not the Html tags 
// //But Text content gets the content of all elements, including <script> and <style> elements

// headertitle.innerHTML='<h3>Hello<h3>' //doesn't change h1 to h3 but uncludes an h3 inside h1
// headertitle.style.borderBottom="solid 3px #000"

// let header=document.getElementById('main-header')
// header.style.borderBlock="solid 3px #000"

// let items_title=document.getElementsByClassName('title');
// console.log(items_title)
// items_title[0].style.fontWeight='bold';
// items_title[0].style.color='green';

// // let items=document.getElementsByClassName('list-group-item');
// // console.log(items);
// // items[2].style.backgroundColor='green';

// // //items.style.backgroundColor='green'; doesn't work, we have to apply for loop
// // for (var i=0;i<items.length;i++){
// //     items[i].style.fontWeight='bold';
// // }

// //Similarly for get by Tag name
// // let li=document.getElementsByTagName('li');
// // console.log(li);
// // li[1].style.backgroundColor='green';
// // for (var i=0;i<li.length;i++){
// //    li[i].style.fontWeight='bold';}
// // li[2].style="display:None"

// //QuerySelector selects only the first item by default
// let header= document.querySelector('#main-header');
// header.style.borderBottom="solid 4px #ccc";

// let submit=document.querySelector('input[type="submit"]');
// submit.value="SEND";

// let item=document.querySelector('.list-group-item');

// let lastitem=document.querySelector('.list-group-item:last-child');

// let seconditem=document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color="green";

// //QueryselctorAll works like getelementsbyclass/tagname

// let titles=document.querySelectorAll('.title');
// console.log(titles);

// let odd=document.querySelectorAll('li:nth-child(odd)');
// for (let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }

// let seconditems=document.querySelectorAll('li:nth-child(even)');
// seconditems[0].style.color='green';

//----------------------------------------------------------------------------------------
//Traversing the DOM
let itemlist=document.querySelector('#items');
// //Parent-node
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor='grey'

// console.log(itemlist.parentNode.parentNode);

// //ParenElement and parent node can be used intechangeably

// console.log(itemlist.parentElement);

//CHildNode

// console.log(itemlist.childNodes); //also includes line break by default

// console.log(itemlist.children); //does not include line breaks
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor='yellow';

// //FirstChild
// console.log(itemlist.firstChild) //include line breaks
// console.log(itemlist.lastChild)
// //Firstelement child

// console.log(itemlist.firstElementChild);
// console.log(itemlist.lastElementChild);
// //itemlist.firstElementChild.textContent='Hello1';

// itemlist.firstChild.textContent='Hello World';

// let containerlist=document.querySelector('.container');
// console.log(containerlist.childNodes);
// containerlist.firstChild.textContent='Hello World';

// //nextSibling
// console.log(itemlist.nextSibling); //text/line breaks
// console.log(itemlist.nextElementSibling);

// //previous sibling
// console.log(itemlist.previousSibling); //text/line breaks
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color='green';

//create element
//create a div
let newDiv=document.createElement('div');
newDiv.className="hello";
newDiv.id="Hello1"
newDiv.setAttribute('title','Hello Div');
let newDivtext=document.createTextNode('Hello World')
newDiv.appendChild(newDivtext);
let container=document.querySelector('header .container');
let h1=document.querySelector('header h1')
newDiv.style.fontSize="30px";
container.insertBefore(newDiv,h1);
console.log(newDiv);





