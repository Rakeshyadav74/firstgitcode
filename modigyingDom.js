//Traversing THE DOM//
var itemList=document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='yellow'

//FirstChild
//console.log(itemList.firstChild);
//firstElementChild
//console.log(itemList.firstElementChild)
//itemList.firstElementChild.textContent='hello1'


//lasrChild
//console.log(itemList.lastChild);
//lastElementChild
//console.log(itemList.lastElementChild)
//itemList.lastElementChild.textContent='hello4'


//nextSibling
//console.log(itemList.nextSibling);
//nextSibling
//console.log(itemList.nextElementSibling)


//previousSibling
//console.log(itemList.previousSibling);
//previousSibling
//console.log(itemList.previousElementSibling)
//itemList.previousElementSibling.style.color='green';

//createElement
 //create a div
 var newDiv=document.createElement('div');
 //add a class
 newDiv.className='hello';
 // add attribute
 newDiv.setAttribute('title','hello div');

 //create a textNode
 var newDivText=document.createTextNode('hello world');
 //add text to div
 newDiv.append(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1')


 console.log(newDiv)
 newDiv.style.fontSize='30px';
 container.insertBefore(newDiv,h1)


