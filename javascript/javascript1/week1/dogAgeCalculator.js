function getDogAge() {
    const dogYearOfBirth = 2017; //Dog birth year
    const dogYearFuture = 2027; // future year
    let dogYear = dogYearFuture-dogYearOfBirth; // calculate age
    let shouldShowResultInDogYears = true; //set true if is for dog year and set false for human year only

     /* 
     check if varible of dogyear is true
        then change human year to dogyear
        by add 7 times to human year and 
        add result to string 
        */
        if(shouldShowResultInDogYears) {
            dogYear *= 7;
            console.log("\n or your dog will be " + dogYear + " dog years old in " + dogYearFuture);
        }
        else{
            console.log(" Your dog will be " + dogYear  + " human years old in " + dogYearFuture);//first is show human year
        }

}; 
getDogAge();