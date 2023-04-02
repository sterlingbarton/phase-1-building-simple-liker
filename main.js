// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likeBtn = document.getElementsByClassName('like-glyph')
  console.log(likeBtn)

  for (let i = 0; i < likeBtn.length; i++) {
    likeBtn[i].addEventListener('click', () => {
      mimicServerCall().then((response) => {
        console.log(response)
        if (likeBtn[i].innerHTML === EMPTY_HEART) {
          likeBtn[i].innerHTML = FULL_HEART;
          likeBtn[i].classList.add('.activated-heart')
        } else {
          likeBtn[i].innerHTML = EMPTY_HEART;
          likeBtn[i].classList.remove('.activated-heart')
        }
      
    }).catch((error) => {
      console.log(error)
      let errorModal = document.querySelector('#modal')
      errorModal.classList.remove('hidden')
      let errorMessage = errorModal.querySelector('h2')
      errorMessage.textContent = error
      setTimeout(() => {
      errorModal.classList.add('hidden')
      }, 3000)
    })
  })
  }
   




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
