putstr('enter a month number: ');
var monthNum = readline();
var monthName;
switch (monthNum){
	case "1":
		monthName = "January";
		break;
	case "2":
		monthName = "February";
	case "3":
		monthName = "March";
	default:
		print("Bad input");
}