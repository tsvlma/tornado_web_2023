console.log('lesson day 19 - js dom create')

// recapture
//arrays

// create an array
var stringArray = ['one', 'two', 'three', 'four', 'five'];
console.log(stringArray);

//access an array element

console.log(stringArray[0]);
console.log(stringArray[1]);
console.log(stringArray[2]);
console.log(stringArray[3]);
console.log(stringArray[4]);

//when 100 elements in an array
// for loop is better

for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i])
}

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('number arrays'; numberArray);

for (let index = 0; index < numberArray.length; index++) {
    console.log(numberArray[index]);
}
//change the value of an array element at index 3
numberArray[3] = 14;
console.log(numberArray);


// find max element of an array
//find max element index of an array


var maxElement = -1000;
var maxIndex = 0;
for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] >= maxElement) {
        maxElement = numberArray[i];
        maxIndex = i
    }
}

console.log('max element:', maxElement)
console.log('max index:', maxIndex);

var content = document.letElementById('content');
console.log(content);
content.innerHTML = 'hello world';

//NEW LESSON CREATE ELEMENT IN DOM 
var ulElement = document.createElement('ul');
var liElement = document.createElement('li');
liElement.innerHTML = 'one';

//insert li element one into ul element
ulElement.appendChild(ulElement);

/// add new h2 tag after ul tag 

var h2Element = document.createElement('h2');
h2Element.innerHTML = 'this is a new h2 tag';
content.appendChild(h2Element);
var ul2Element = document.createElement('ul');
for (let i = 0; i < stringArray.length; i++) {
    var li2Element = document.createElement('li');
    li2Element.innerHTML = stringArray[i];
    ul2Element.appendChild(li2Element);
}
content.appendChild(ul2Element);