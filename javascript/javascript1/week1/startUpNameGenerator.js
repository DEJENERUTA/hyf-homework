function getStartupName() {
    //first words array for first name of the company
    const firstWords = ["Eazy", "Juicy", "Awezome", "Superb", "Exzellent", "YeahYeah", "Nicey", "Perrfect", "Alle", "ForYou"];
    //second words array for type of the company
    const secondWords = ["Company", "Solution", "Technology", "Soft", "Cooperation", "Inc", "Limited", "Corp", "Partnership", "Application"];
    //find random value with in total of records in array
    const randomNumber = Math.floor(Math.random() * 10) + 0;    
    //create company name
    let startupName = (firstWords[randomNumber] + " " + secondWords[randomNumber]);
    //answer result
    console.log('The Startup name: "' + startupName + '"' + ' contains ' + startupName.length);
};
getStartupName();