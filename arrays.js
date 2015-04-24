//Creating array
var number = [];

print(number.length); // prints length of array

var numbers = [1,2,3,4,5];
print(numbers.length); //prints length of array

//create array using the array constructor
var numbers = new Array();
var numbers = new Array(1,2,3,4,5);
var numbers = new Array(10); // this specifies the length of the array

// array elements don't have to be of the same type
var objects = [1, "Joe", true, null];

// verify that an object is an array by calling isArray function
var numbers = 3;
var arr = [7,4,1776];
print(Array.isArray(number));// will display false
print(Array.isArray(arr)); //displays true

//assigning elements to an array 
var nums = [];
for (var i =0; i < 100; ++i){
	nums[i] = i+1;
}

//accessing elements
var nums = [1,2,3,4,5];
var sum = nums[1] + num[2];

//creating an array using the split function with a string
var sentence = " the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for(var i = 0; i< words.length; ++i){
	print("word"+ i + ":" + words[i]);
}

//indexOf function
//Searching for a value
//indexOf returns the results of the first occurence
var names = ["David", "Cynthia", "Raymond", "Clayton","Jennifer"];
putstr("Enter a name to search for: ");
var name = readLine();
var position = names.indexOf(name);
if(position >= 0 ){
	print("found" + name + " at position " + position);
}
else {
	print(name + " not found in the array");
}

//lastIndexOf will return the postion of the last occurrence of an arguement
var names = ["David", "Mike", "Cynthia", "Raymond", "Mike"];
var name = "Mike";
var firstPos = names.indexOf(name);
print("First found" + name + " at position " + firstPos);
var lastPos = names.lastIndexOf(name);
print("last found" + name + "at position" + lastPos);


//string representation of arrays
var names = ["David", "Cynthia", "Raymond", "Clayton"];
var namestr = names.join();
print(namestr);
var namestr = names.toString();
print(namestr);

//when you call print() function with an array name you automatically call the toString function

//concat() function allows you to put together two or more arrays to create a new array
var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];
itDiv = cisDept.concat(dmpDept);
print(itDiv);
itDiv = dmpDept.concat(cisDept);
print(itDiv);

//splice() creates new array from existing array
var itDiv = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = itDiv.splice(3,3);
var cisDept = itDiv;
print(dmpDept);
print(cisDept);

//Adding elements to an array
//push() and unshift()
//push() adds an element to the end of an array
var nums = [1,2,3,4,5];
print(nums);
nums.push(6);
print(nums);

//using push() is more intuitive than using the length property

//Adding elements to the beginning of an array unshift()
var nums = [2,3,4,5];
print(nums);
var newnum = 1;
nums.unshift(newnum);
print(nums);
nums = [3,4,5];
nums.unshift(newnum,1,2);
print(nums);

//Removing Elements from an Array
//pop() function removes the last element in an array
var nums = [1,2,3,4,5,9];
nums.pop();
print(nums);

//Removing an element from the beginning of an array is shift()
var nums = [9,1,2,3,4,5];
nums.shift();
print(nums);

//pop() and shift() return the values that they remove

//splice() function is used to add an element from the middle of an array
/*Arguments required:
 *Starting Index
 *number of elements to remove(0 when adding)
 *elements to add
*/

var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,0,newElements);
print(nums); //will print 1,2,3,4,5,6,7,8

//to remove an element from an array with splice
var nums = [1,2,3,100,200,300,400,4,5];
nums.splice(3,4);
print(nums); //will print 1,2,3,4,5

//Putting array elements in order
//reverse() function, reverses the order of the function
var nums = [1,2,3,4,5];
nums.reverse();
print(nums); //will print 5,4,3,2,1

//sort() function works well with strings but not with numbers
//sort() uses the compare function to sort numbers e.g.
function compare(num1, num2) {
   return num1 - num2;
}
var nums = [3,1,2,100,4,200];
nums.sort(compare);
print(nums);

//Iterator Functions
//forEach() takes a function as an argument and applies the called function to each element of an array
function square(num){
	print(num, num*num);
}
var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);

//Every applies a Boolean function to an array and returns true if the function can return true for every element in the array
function isEven(num){
	return num % 2 == 0;
}
var nums = [2,4,6,8,10];
var even = nums.every(isEven);
if(even){
	print('all numbers are even');
}else {
	print("not all numbers are even");
}

//Some() function will take a boolean function and return true if at least one of the elements
//in the array meets the criterion of the boolean function
function isEven(num){
	return num % 2 == 0;
}
var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);
if(someEven) {
	print("some numbers are even");
} else {
	print("no numbers are even");
}
nums = [1,3,5,7,9];
someEven = nums.some(isEven);
if(someEven){
	print("some numbers are even");
} else {
	print("no numbers are even");
}

//reduce() function applies a function to an accumulator and successive elements of an array until it reaches a single value
function add(runningTotal, currentValue){
	return runningTotal + currentValue;
}
var nums = [1,2,3,4,5,6,7,8,9,10]
var sum = nums.reduce(add);
print(sum);//displays 55

//can also use the reduce function to perform concatenation
function concat(accumulatedString, item){
	return accumulatedString + item;
}
var words = ['the','quick','brown','fox'];
var sentence = words.reduce(concat);
print(sentence); //prints the quick brown fox

//reduceRight() function works like the reduce function but it works from right to left
function concat(accumulatedString, item){
	return accumulatedString + item;
}
var words = ['the', 'quick','brown','fox'];
var sentence = words.reduceRight(concat);
print(sentenece); //displays "fox brown quick the"

//Iterator functions that return a new array
//map() function applys a function to each element of an array and it returns a new array with the results
function curve(grade){
	return grade +=5;
}
var grades = [77,65,81,92,83];
var newgrades = grades.map(curve);
print(newgrades); //82,70,86,97,88

//returning an array with the first letter in the word
function first(word){
	return word[0];
}
var words = ['for','your','information'];
var acronym = words.map(first);
print(acronym.join('')); //displays fyi

//filter() function returns a new array consisting of elements that satisfy a boolean function
function isEven(num){
	return num % 2 == 0;
}
function isOdd(num){
	return num % 2 != 0;
}
var nums = [];
for (var i = 0; i < 20; ++i){
	nums[i] = i+1;
}
var evens = nums.filter(isEven);
print("Even numbers: ");
print(evens);
var odds = nums.filter(isOdd);
print("Odd numbers: ");
print(odds);

//creating a 2 dimensional array
Array.matrix = function(numrows,numcols,initial) {
	var arr = [];
	for(var i = 0; i < numrows; i++){
		var columns = [];
		for(var j =0; j < numcols; ++j){
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr;
}

//test array
var nums = Array.matrix(5,5,0);
print(nums[1][1]);//will print 0
var names = Array.matrix(3,3,"");
names[1][2] = "Joe";
print(names[1][2]);// will print Joe

//create 2 dimensional array and initialize in one line
var grades = [[89,77,78],[76,82,81],[91,94,89]];
print(grades[2][2]);
//Use this approach for small datasets

//Can process 2 dim arrays in 2 ways by rows and by columns
var grades = [[89,77,78],[76,82,81],[91,94,89]];
var total = 0;
var average = 0.0;
for(var row = 0; row < grades.length; ++ row){
	for(var col=0; col < grades[row].length; ++col){
		total += grades[row][col];
	}
	average = total/grades[row].length;
	print("Student " + parseInt(row+1) + " average: " + average.toFixed(2));
	total = 0;
	average = 0.0;
}

//Jagged array is an array where the rows int eh array have different numbers of elements
var grades = [[89, 77],[76, 82, 81],[91, 94, 89, 99]];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
   for (var col = 0; col < grades[row].length; ++col) {
      total += grades[row][col];
   }
average = total / grades[row].length;
   print("Student " + parseInt(row+1) + " average: " +
         average.toFixed(2));
   total = 0;
   average = 0.0;
}
//Jagged array that computes the grades for students

//Array of objects
function Point(x,y){
	this.x = x;
	this.y = y;
}
function displayPts(arr){
	for(var i = 0; i< arr.length; ++i){
		print(arr[i].x + " , "+ arr[i].y);
	}
}
var p1 = new Point(1,2);
var p2 = new Point(3,5);
var p3 = new Point(2,8);
var p4 = new Point(4,4);
var points = [p1,p2,p3,p4];
for (var i = 0; i< points.length; ++i){
	print("Point " + parseInt(i+1) + ": " + points[i].x + " ," + points[i.y]);
}
var p5 = new Point(12, -3);
points.push(p5);
print("After push: ");
displaysPts(points);
points.shift();
print("After shift: ");
displayPts(points);