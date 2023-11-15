console.log('js dom create element html function');


var h2Element = document.createElement('h2');

h2Element.textContent = 'LIST of TODOs';

var content = document.getElementById('content');
content.appendChild(h2Element);

var listOfTodos = ['html functions','js events','js dom create element html functions'];



var ulElement = document.createElement('ul');

for (let i = 0; i < listOfTodos.length; i++){

    var liElement = document.createElement('li');

    liElement.textContent = listOfTodos[i];

    ul
}