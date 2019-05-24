    /* InPut */
    
            function housePriceCalculator(name,height,width,deep,gardenSizeInM2,housCost){
                let volumeInMeters = height*width*deep;
                let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
                let diff= housePrice-housCost;
                if(diff>0){
                    console.log(name +" pays less: " + diff);
                } 
                else{
                    console.log(name +" pays more:" + -(diff));
                }
            };
            housePriceCalculator("Peter",10,8,10,100,2500000);
            housePriceCalculator("Julia",8,11,5,70,1000000);
         
           