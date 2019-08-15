let  listOfEmojis;
function fetchEmoji(){
    fetchEmoji('https://raw.githubusercontent.com/amio/emoji.json/master/emoji.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
  listOfEmojis = json
  console.log(listOfEmojis);
  renderHtml(listOfEmojis);
})
}
function renderHTML(listOfEmojis){
    const ultAG = Document.querySelector("ul");
    listOfEmojis.forEach( => {
        
    });
    console.log(renderHTML);


   
 



