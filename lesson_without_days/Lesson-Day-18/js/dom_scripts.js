console.log('lesson day 18 - DOM scripts');

var aboutMe = "my name is Khangaikhuu";

console.log(aboutMe);

/// first dom script
var content = document.getElementById('content');
console.log(content)

content.innerHTML = aboutMe;

// getElemensByTagName

var listItems = document.getElemenyByTagname('li');
console.log(listItems);
console.log(listItems[7]);
console.log(listItems[7].innerHTML);

listItems[7].innerHTML = "NoBodY";

console.log('for with let');
let i = 0
for(i; i< 10; i++){ // local scope
    console.log(i);
}
// console.log(i)

console.log('for with var');
for(var[k = 0; k<10; k++]){
    console.log(k);
}
console.log(k);