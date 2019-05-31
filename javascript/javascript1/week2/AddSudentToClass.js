
//homework for hack your future of javascript week2
//flight Booking fullName function
// By Dejene Daba
const Class07Students = [];
function addStudentToClass(studentName) {

if (Class07Students.length < 6 || studentName === "queen") {
    Class07Students.push(studentName);
}

else if (studentName === "Lea") {
    console.log ( "student Lea is already in the class")
}

else if (studentName ==="") {
    console.log ("cannot add empty string")

}

};

function getNumberOfSudents(arrayGiven) {
return arrayGiven.length;
};

addStudentToClass("Tomas");
addStudentToClass("");
addStudentToClass("Rita");
addStudentToClass("Anker");
addStudentToClass("queen");
addStudentToClass("Louis");
addStudentToClass("Liva");
console.log(getNumberOfSudents (Class07Students));