
console.log("file loaded");
const spiritAnimalNames = ['Fast the Rabbit', 'King the Lion', 
                           'Long the Girraf', 'color the Tiger', 
                           'Agly the Hayna', 'Cleaver the Monky', 
                           'Beauty the Zebra', 'Honest the Dog',
                           'Big the Elephant', 'Slow the Tortorise'];

                           var heading = document.createElement("h1");
                           heading.setAttribute("id" , "heading");
                           document.body.appendChild(heading);
                           heading.innerText = "spirit Animal Name Generator";
                    var p = document.createElement("p");
                    p.setAttribute("class" , "text");
                    document.body.appendChild(p);
                    p.innerText = "(please enter your first-name to get your spirit animal name)";
                    function spiritAnimalNameGenerator() {

                        var input = document.getElementById("firstName").nodeValue;
                           if(input === "") {
                               alert("please enter your first name");
                               return;
                    }

                     else {
                     let randomIndex = Math.floor(Mth.random() * 10);
                     var spiritAnimalName = spiritAnimalNames[randomIndex];
                     var output = document.getElementById("spiritAnimalNameOutPut")
                     output.innerText = "Name : " + input + " - " + spiritAnimalName;


                    }


                    }


