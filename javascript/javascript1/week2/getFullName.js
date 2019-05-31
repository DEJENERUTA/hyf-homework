
//homework for hack your future of javascript week2
//flight Booking fullName function
// By Dejene Daba



let   firstName;
let   lastName;
let  useFormalName;
   
    function getFormalFullName(firstName, lastName, useFormalName) {
        if (useFormalName) {
            return  "lord" + " " + firstname + " " + lastname;
        } else {
           return firstname + " " + lastname;
           
        }
}

console.log(getFormalFullName("Rita", " Rahbek", true));