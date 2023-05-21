const myStart = document.getElementById('start')
const words = ["horse", "dog", "bee", "cat", "tiger", "lion"]
let i = 0;
const end = document.querySelector('.end')
const mySeconds = document.getElementById('seconds')
const myWord = document.getElementById('word')
const myInput = document.getElementById('input')
const myNext = document.getElementById('next')
const myModal = document.getElementById('modal')
const myScore = document.getElementById('myScore')
let time = 20;
var obj;
let score = 0;
const tryAgain = document.getElementById('tryagain')

function timing () {
    time--
    mySeconds.textContent = time
    if(time == 0){
     myModal.showModal()
      clearInterval(obj)
      myScore.textContent = score
    }
 
}



myStart.addEventListener("click", ()=>{
  end.style.opacity = "1"
  myStart.style.display = "none"
  myWord.textContent = words[i]
  obj = setInterval(timing, 1000)
  myNext.style.opacity = "1"

})


myNext.addEventListener('click', () =>{
  
  if(myInput.value == myWord.textContent){
   score++  
   i++
   myWord.textContent = words[i]
   if(i > 5){
    i = 0
    myWord.textContent = words[i]
   }
   myInput.value = ""
  }
 
})


tryAgain.addEventListener("click", ()=>{
  location.reload()
})



