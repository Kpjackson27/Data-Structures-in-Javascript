/*Dictionary*/
/*Store data as key-value pairs*/

function Dictionary(){
	this.datastore = new Array();
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAl;
	this.count = count;
	this.clear = clear;
}

//add function, takes two arguments, a key and a value
function add(key,value){
	this.datastore[key] = value;
}

//find() function takes a key as an argument and returns the value associated with it
function find(key){
	return this.datastore[key];
}

//remove() function removes the key and associated value
function remove(key){
	delete this.datastore[key];
}

//view all the key pairs in th dictionary
function showAll(){
	for each (var key in Object.keys(this.datastore).sort()){
		print(key + " -> " + this.datastore[key]);
	}
}

//count() function, finds out how many entries in a dictionary
function count(){
	var n = 0;
	for each(var key in Object.keys(this.datastore)) {
		++n;
	}
	return n;
}

//clear() function 
function clear() {
	for each (var key in Object.jeys(this.datastore)){
		delete this.datastore[key];
	}
}
