/*Stacks
 *A stack is a list of elements that are accessible only from one end of the list
 *LIFO - Last in first out data structure
*/

//Constructor function for stack 
function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push ;
	this.pop = pop;
	this.peek = peek;
}

//push a new element onto a stack
//Incrementing after ensures the current value of top is used to place the new
//element at the top before top is incremented
function push(element) {
	this.dataStore[this.top++] = element;
}

//removes the element at the top of the list
function pop(){
	return this.dataStore[--this.top]; 
}

//view the first element in the array
//calling peek() on an empty stack will return undefined
function peek(){
	return this.dataStore[this.top-1];
}

//returning the value of top will return the length of the array
function length(){
	return this.top;
}

//clear the stack by setting top to 0
function clear(){
	this.top = 0;
}

/*Testing the Stack class

var s = new Stack();
s.push("name");
s.push("name");
print("length: " + s.length());
print(s.peek());
var popped = s.pop():
print("The popped element is: " + popped);
