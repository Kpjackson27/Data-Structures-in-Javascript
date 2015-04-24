/*Linked Lists
 *A collection of objects called nodes
 *Each node is linked to a successor node in the list using an object reference
 *Reference to another node is a link
*/
/*    head -> item -> item -> item -> item -> null */

//Referenced by the relationship to other elements in the linked list
//End of list is marked by pointing to a null node

//Node Class holding the node data and the link to the next node
function Node(element){
	this.element = element;
	this.next = null;
}

//constructor
function LList(){
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.findPrevious = findPrevious;
	this.display = display;
}

//find() function returns the node that we want to insert the node after
function find(item){
	var currNode = this.head;
	while(currNode.element != item){
		currNode = currNode.next;
	}
	return currNode;
}

//insert() function inserts the new node and changes the references of the current and after nodes
function insert(newElement, item){
	var newNode = newNode(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next  = newNode;
}

//display function...shows the elements contained within a linkedlist
function display() {
	var currNode = this.head;
	while(!(currNode == null )) {
		print(currNode.next.element);
			currNode = currNode.next;
	} 
}

//findPrevious() find previous function of item to be removed
function findPrevious(item){
	var currnode = this.head;
	while(!(currNode.next == null)&&
		(currNode.next.element != item)){
		currNode = currNode.next;
	}
	return currNode;
}
//remove links to item to be removed
function remove(item){
	var prevNode = this.findPrevious(item);
	if(!(prevNode.next == null)){
		prevNode.next = prevNode.next.next;
	}
}

/*test function

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();
*/
