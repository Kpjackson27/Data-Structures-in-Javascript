var number = 1;
var sum = 0;
for(var number = 1; number < 11; number++){
	sum += number;
}
print(sum);

/***Array example*****/
var numbers = [3,7,12,22,100];
var sum = 0;
for(var i = 0; i < numbers.length; ++i){
	sum +=numbers[i];
}
print(sum);


/***factorial****/

function factorial(number){
	var product = 1;
	for(var i = number; i >=1; --i){
		product *= i;
	}
	return product;
}

print(factorial(4));//prints 24


/**Void function**/
function curve(arr, amount){
	for(var i=0;i<arr.length; ++i){
		arr[i] +=amount;
	}
}

var grades = [77,73,74,81,90];
curve(grades,5);
print(grades);//prints 82,78,79,86,95

/**Local and global scope**/
function showScope(){
	var scope = "local"; // local scope because initialized within a function
	return scope;
}
var scope = "global";
print(scope); // will print global
print(showScope());//will print local