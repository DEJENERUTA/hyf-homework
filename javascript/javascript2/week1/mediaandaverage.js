
const housePrices = [3000000,3500000,1300000,40000000,100000000,8000000,2100000];

function average(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];

    }

    ave=sum/a.length;
    return ave;
}

function median(a) {
    const sort = a.sort();
    const middle = Math.floor(sort.length/2);

    if (sort.length%2 === 0) {
        return(sort[middle-1]+sort[middle])/2;

    }

    return sort[middle];

}

console.log(average(housePrices));
console.log(median(housePrices));

function averageAndMedian(a) {
    let av = average(a);
    let me = median(a);
    let meAndAv = {av,me};
    return meAndAv;

}

console.log(averageAndMedian(housePrices));


 