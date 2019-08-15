let fruits = ['oranges','apples','cherries'];

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

let i = 0;
while (i<fruits.length){
    console.log(fruits[i]);
    i++;

}

console.log()
//let i = 0;
for(let i=fruits.length-1;i>=0;i--){
    console.log(fruits[i]);
}
function celsius(tempInc){
    tempinFahrenheit = tempInc* 9/5 + 32;
    return tempinFahrenheit;

}
console.log(celsius(18));



