console.log('lesson day 18 - js arrays')

// variables
var ball1 = 'basketball';
var ball2 = 'football'
var ball3 = 'tennisball'
// ....
// container for variables
//array

var ballContainer = [' basketball' , 'footbal' ]
var myFavNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9] // number array
var booleanArray = [true, false, true, false,] // boolean array 

console.log(ballContainer);

console.log(ballContainer[0]); //basketball
console.log(ballContainer[1]); // football
console.log(ballContainer[2]); // tennisball
console.log(ballContainer[3]); // undefined

console.log(myFavNumbers.length); // 12
// print all elements of the favorite numbers array
for(var i = 0; i < myFavNumbers.length; i++){
    console.log('my favorite number is;' +myFavNumbers[i]);
}
console.log('my favorite numbers before;' + myFavNumbers);
myFavNumbers[6] = 14;
myFavNumbers[7] = 16;
myFavNumbers[8] = 18;
console.log('my favorite numbers after;'  +myFavNumbers);