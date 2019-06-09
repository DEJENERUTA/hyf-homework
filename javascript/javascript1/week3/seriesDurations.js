const seriesDurations = [
    {
        title: 'Game of thrones',
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: 'sopronos',
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: 'The wire',
        days: 2,
        hours: 12,
        minutes: 0,
    }
]
//adding more series
function addSeries (title, days, hours, minutes){
    seriesDurations.push({title, days, hours, minutes})
}
addSeries("sherlock", 0, 18, 0);
addSeries("Black Mirror", 0, 16, 0);

// the length of watched series, counted in hours
const myLifeSpam = 37*360*24; //lifespam in hours
var totalTime = 0;
for (let i = 0; i < seriesDurations.length; i++){
    let timeUsedOnSeries = ((seriesDurations[i].days * 24) + seriesDurations[i].hours);
    let percentOfMyLife = timeUsedOnSeries / myLifeSpam * 100;
    totalTime+= percentOfMyLife;
    console.log(seriesDurations[i].title + " took " + percentOfMyLife.toFixed(3)+ "% of my life");


}

console.log("In total that is "+totalTime.toFixed(3)+"% of my life");
