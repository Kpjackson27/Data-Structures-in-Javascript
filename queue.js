/*Queues*/
//FIFO data structure
//Stores data in the order in which they occur
 
 //Constructor for the queue function
 function Queue(){
 	this.dataStore = [];
 	this.enqueue = enqueue;
 	this.dequeue = dequeue;
 	this.front = front;
 	this.back = back;
 	this.toString = toString;
 	this.empty = empty;
 }

 //enqueue() function adds element to the end of the queue
 function enqueue(element){
 	this.dataStore.push(element);
 }

 //dequeue() function removes an element from the front of a queue
 function dequeue(){
 	return this.dataStore.shift();
 }

//return the first value in the array with thr front() function
function front(){
	return this.dataStore[0];
}

//return the last value with the back() function
function back(){
	return this.dataStore[dataStore.length - 1];
}

//display all the elements in the queue with the toString() function
function toString(){
	var retStr = "";
	for(var i=0; i< this.dataStore.length; ++i){
		retStr += this.dataStore[i] + "\n";
	}
	return retStr;
}

//empty() function returns if the queue is empty or not
function empty(){
	if(this.dataStore.length == 0) {
		return true;
	} else {
		return false;
	}
}

/*testing the queue function
 var q = new Queue();
 q.enqueue("Meridith");
 q.enqueue("Cynthia");
 q.enqueue("Jennifer");
 print(q.toString());
 q.dequeue();
 print(q.toString());
 print("Front of queue: " + q.front());
 print("Back of queue:" + q.back());
*/
