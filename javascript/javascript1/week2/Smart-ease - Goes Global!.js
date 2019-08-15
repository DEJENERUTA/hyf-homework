

//Write a function called "getFullName".

//Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.
//function getFullName(firstName, lastName) {
  // your code here
//}
//var output = getFullName('Joe', 'Smith');
//console.log(output); // --> 'Joe Smith'
//This is helpful for learning function definitions and structure,
//and also how to combine strings together.

//Instructions: return firstName + " " + lastName;
//Because you give the first and last name as inputs, it can directly
//use them to form the return string. 


var person1 = {
    firstName: "Dejene", 
    lastName: "Daba"
    
  };
  
  function getFullName (firstName,lastName)
   {
  return firstName + " " + lastName;
  
  }
  console.log(getFullName(person1));
  