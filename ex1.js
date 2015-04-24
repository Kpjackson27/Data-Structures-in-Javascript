function studentGrades(){
	this.grade = [];
	this.averageGrade = averageGrade;
	this.addGrades = addGrades;
}

function addGrades(temp){
	this.grade.push(temp);
}

function averageGrade(){
	var num = this.grade.length;
	var total = 0;

	for(var i = 0; i<num; ++i){
		total = total + this.grade[i];
	}
	return total / num;
}

var test = new studentGrades();
test.addGrades(10);
test.addGrades(90);
test.addGrades(80);
test.addGrades(40);
test.addGrades(60);
test.addGrades(50);
print(test.averageGrade());
