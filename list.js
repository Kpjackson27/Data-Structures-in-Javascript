/**List Data Structure Implementation
 *List is an ordered sequence of data of any datatype
 * Abstract Data Type
 *ADT List
 *
 *listSize(property) 	Number of elements in list
 *pos(property)			Current position in list
 *length(property)		Returns the number of elements in list
 *clear(function)		Clears all elements from list
 *toString(function)	Returns string representation of list
 *getElement(function)	Returns element at current position
 *insert(function)		Inserts new element after existing element
 *append(function)		Adds new element to end of list
 *remove(function)		Removes element from list
 *front(function)		Sets current posiiont to last elemet of list
 *end(function)			Sets current position to last element of list
 *prev(function)		Moves current position back one element
 *next(function)		Moves current position forward one element
 *currPos(function)		Returns the current position in list
*moveTo(function)		Moves the current position to specified position
*/

//Contructor function
function List(){
	//list is initially empty 
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = []; //initialize an empty array to store list elements
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.length = length;
	this.contains = contains;
}

//Append function: add an element to the list at the next available location
function append(element){
	this.dataStore[this.listSize ++]  = element; //listSize incremented by 1 after element is appended
}

//removing an element from the list
//Implement a helper function find to find the element to remove
function find(element){
	for(var i = 0; i< this.dataStore.length; ++i){
		if(this.dataStore[i] == element){
			return i;
		}
	}
	return -1;
}

//remove function uses the position returned by find() to splice the dataStore array
//listSize is decremented by 1 to reflect the new size of the list
function remove(element){
	var foundAt = this.find(element);
	if(foundAt > -1){
		this.dataStore.splice(foundAt,1);
		--this.listSize;
		return true;
	}
	return false;
}

//Use the length function to determine the number of elements in the list
function length(){
	return this.listSize;
}

//Retrieve an element from the list
function toString(){
	return this.dataStore;
}

//Insertion occurs after a specified element already in the list
function insert(element, after){
	var insertPost = this.find(after);
	if(insertPos > -1){
		this.dataStore.splice(insertPos+1,0,element);
		++this.listSize;
		return true;
	}
	return false;
}

//Clear - remove all elements from the list
function clear() {
	delete.this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}

//Contains: Determine if a given value is in the list
function contains(element){
	for(var i =0; i< this.dataStore.length; ++i){
		if(this.dataStore[i] == element){
			return true;
		}
	}
	return false;
}

//Traversing through the list

//front - get value at the front of the list
function front(){
	this.pos = 0;
}

//end - get value at the end of the list
function end(){
	this.pos = this.listSize-1;
}

//prev - get value in the previous position
function prev(){
	if(this.pos > 0){
		--this.pos;
	}
}

//next - get value of the value in the next position
function next(){
	if(this.pos < this.listSize-1){
		++this.pos;
	}
}

//currPos - get the value at the current position
function currPos(){
	return this.pos;
}

//moveTo - move to the value at specified position
function moveTo(position){
	this.pos = position;
}

//getElement - get the element at a specified position
function getElement(){
	return this.dataStore[this.pos];
}


//Using iterator functions to traverse through list
for(names.front(); names.currPos() < names.length(); names.next()){
	print(names.getElement());
}

//Traversing a list backwards using an iterator
for(names.end();names.currPos() >= 0; names.prev()){
	print(names.getElement());
}

