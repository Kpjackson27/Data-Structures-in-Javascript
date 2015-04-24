/*Priority Queue*/

//Initialize object that will sort elements of the Queue
function Patient(name,code){
	this.name = name;
	this.code = code; //this code will specify priority
}

//New definition of dequeue
//Find element with the highest code and remove from the queue
function dequeue(){
	var priority = this.dataStore[0].code;
	for(var i =1; i < this.dataStore.length; ++1){
		if(this.dataStore[i].code < priority){
			priority = i;
		}
	}
	return this.dataStore.splice(priority,1);
}

function toString(){
	var retStr = "";
	for(var i =0; i<dataStore.length; ++i){
		retStr += this.dataStore[i].name + " code: "
			   + this.dataStore[i].code + "\n";
	}
	return retStr;
}
