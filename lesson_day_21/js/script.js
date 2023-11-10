console.log('Lesson day 21 - JS DOM this keyword');


// шинээр өөрийн дуртаЙ өнгөнүүдийн цуглуулга харуулах
const myFavoriteColors = ['red', 'green', 'blue', 'yellow', 'orange'];
// шинээр өөрийн дуртаЙ өнгөнүүдийн цуглуулга харуулах
let contentOneHeader = document.createElement('h2');
contentOneHeader.textContent = 'My Favorite Colors';

let contentOne = document.letElementById('contentOne');
contentOne.appendChild(contentOneHeader);

//лист таг үүсгэж түүндээ өнгөнүүдийг хийж өгнө
let ulTag = document.createElement('ul');
// for loop ашиглаж өнгөнүүдийг хийж өгнө
for (let i = 0; i < myFavoriteColors[i]);
