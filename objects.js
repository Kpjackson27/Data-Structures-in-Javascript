 //create object instance
function Checking(amount){
	this.balance = amount;
	this.deposit = deposit;
	this.withdraw = withdraw;
	this.toString = toString;
}
//deposit function
function deposit(amount){
	this.balance += amount;
}
//withdraw function
function withdraw(amount){
	if(amount <= this.balance){
		this.balance -= amount;
	}
	if(amount > this.balance){
		print("Insufficient funds");
	}
}

//balance function
function toString() {
	return "Balance: " + this.balance;
}

var account = new Checking(500);
account.deposit(1000);
print(account.toString());
account.withdraw(750);
print(account.toString());
account.withdraw(800);
print(account.toString());