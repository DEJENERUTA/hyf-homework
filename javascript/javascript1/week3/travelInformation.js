
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function timeToArrival() {
      return travelInformation.destinationDistance/travelInformation.speed
  }
function convertTime(time) {
    const hour = parseInt(time) ;
       const minute =  parseInt((time - Math.floor(time)) * 60 );
       return hour + " hours and " + minute + " minutes " ;
}
  
  const travelTime = timeToArrival(travelInformation);
  console.log(convertTime(travelTime)); // 8 hours and 38 minutes