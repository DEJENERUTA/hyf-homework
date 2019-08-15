const user = {
    name: 'Dejene',
    age: 25,
    role: 'student',
    classes: ['html and css', 'javascript 1'],
    hobbies: {
        favourite: 'coding',
        sports: 'biking to class'
    }
}


const userArr = [user] ;
    
for(let i =0; i<userArr.length; i++) {
    var sumAge = 0;
//console.log(userArr[i].age);

//console.log(user[i.age])
sumAge =+ userArr[i].age;
}
console.log('this is my age',sumAge);

 /*const avgAge= sumAge / users.length
 console.log(avgAge)  
 
 let allClasses =[]
 for (let i=0; i<users.length; i++){
     console.log(users[i].name)
     console.log(users[i].classes)
 }

    
        
    

    
    
function a(){
    //1
    console.log(1);
    d();
}
*/

