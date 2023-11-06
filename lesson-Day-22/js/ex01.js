var header = document.createElement('header');
console.log(header);
var h1Element = document.createElement('h1');
h1Element.innerHTML = 'Welcome to My Website';
header.appendChild(h1Element)


var main = document.createElement('main');
console.log(main);
var pElement = document.createElement('p');
console.log(pElement)
pElement.innerHTML = 'This is a small website created using HTMl and JavaScript'
main.appendChild(pElement)

var footer = document.createElement('footer');
console.log(footer);
var pElement =document.createElement('p');
console.log(pElement);
pElement.innerHTML = '© 2023 '
footer.appendChild(pElement)

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);