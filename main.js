// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const emptyHeart = document.querySelectorAll('span')


emptyHeart.forEach(element => {
  
  element.addEventListener('click', ()=>{
    
    
    mimicServerCall().catch(function(error){
      
      document.getElementById('modal').className = "visible"
      
      setTimeout(function(){ 
        document.getElementById('modal').className = "hidden"
      }, 3000);
      
      
    })
    if (element.className === "like-glyph"){
   
      element.innerHTML = "&#x2665"
      element.className = "like-glyph activated-heart"

    } else if (element.className === "like-glyph activated-heart") {
      element.innerHTML = "&#x2661"
      element.className = "like-glyph"
    }
  

      });
      
     


})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


