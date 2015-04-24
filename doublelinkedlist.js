/*Doubly Linked List*/
//Adding a property to the node class that stores a link to the previous node
//This helps with efficiency

//Assign a previous property to original node class
function Node(element){
	this.element = element;
	this.next = null;
	this.previous = null;
}
//constructor
function LList(){
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.findPrevious = findPrevious;
	this.display = display;
	this.findLast = findLast;
	this.dispReverse = dispReverse;
}

//find() function returns the node that we want to insert the node after
function find(item){
	var currNode = this.head;
	while(currNode.element != item){
		currNode = currNode.next;
	}
	return currNode;
}

//Insert function is the same for regular linked list except have to set previous property of the node
function insert(newElement, item){
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	newNode.previous = current;
	current.next = newNode;
}

function remove(item){
	var currNode = this.find(item);
	if(!(currNode.next == null)){
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
}

//find the last element in the list without going to the last value
function findLast(){
	var currNode = this.head;
	while(!(currNode.next == null)){
		currNode = currNode.next;
	}
	return currNode;
}

//display elements in reverse order
function dispReverse(){
	var currNode = this.head;
	currNode = this.findLast();
	while(!(currNode.previous == null)){
		print(currNode.element);
		currNode = currNode.previous;
	}
}