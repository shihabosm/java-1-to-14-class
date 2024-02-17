// function play(){
// //  step-1  hide the home screen . to  hide the screen and  class hidden to the home section 
// // show the playground
// const homeSection=document.getElementById('home-screen');
// homeSection.classList.add('hidden');

// // console.log(homeSection.classList)

// const playgroundSection=document.getElementById('play-ground')

// playgroundSection.classList.remove('hidden')

// }
function hanldeKeybordKeyupEvent(event){
    const playerPressed=event.key

    // stop the game
    if(playerPressed ==='Escape'){
        gameOver()
    }


    console.log('player pressed ', playerPressed)
    // get the expected to the press
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet =currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed,expectedAlphabet)
    
    // Checked match or not 
    if(playerPressed===expectedAlphabet){
        
       
      


        const currentScore=getTextElementValueById('current-score');
        const updatedScore=currentScore+1;
        setTextElementValueById('current-score',updatedScore)

        // ---------------------------------
        // update score:
        // 1.get the current score
        // 2. incress the score by 1
        // 3.show the updated score
        // const currentScoreElement=document.getElementById('current-score');
        // const currentScoreText=currentScoreElement.innerText;
        // const currentScore=parseInt(currentScoreText);
        // const currentScore=getTextElementValueById('current-score');


        // const newScore=currentScore + 1;
        // currentScoreElement.innerText=newScore
        // console.log( 'score',currentScore)

        
        // start a new round 
        removeBackgroundColorById(expectedAlphabet)
        continueGame()

    }
    else{
        console.log('you missed you lost a life');

        const currentLife=getTextElementValueById('current-life')
        const updateLife=currentLife - 1;
        setTextElementValueById('current-life',updateLife)

        if(updateLife===0){
            gameOver()
        }
        // =--------------------------
        // // step-1.get the current life number
        // const currentLifeElement=document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeText)
        // // step-2 reduce life count 
        // const newLife= currentLife - 1;

        // // step-=3. display the update life count
        // currentLifeElement.innerText=newLife


    }
    }
    // capture keybord key press 
    document.addEventListener('keyup',hanldeKeybordKeyupEvent)

function continueGame(){
// step-1 :genarate  a random alphabet
const alphabet=getARandomAlphabet()
// console.log('your random alphabet',alphabet)
// set randomly genaret  alphabet  to the show it
const currentAlphabetElement = document.getElementById('current-alphabet')
currentAlphabetElement.innerText=alphabet;
//  set background color
setBackgroundColorById(alphabet);

}

function play(){
    // hide everything show only the play ground
    // window.location.reload()

    hideelementById('home-screen');
    hideelementById('final-score')
    showElentById('play-ground')

    // reset score life 
    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)

    continueGame()

}

function gameOver(){

hideelementById('play-ground')
showElentById('final-score')
//  update final score
// get the final score
const lastScore=document.getElementById('current-score');
// lastScore.inner 
const lastScorevalue =lastScore.innerText
setTextElementValueById('game-score',lastScorevalue)

// clear the last selected alphabet
const alphabet = getTextElementById('current-alphabet');
// console.log(alphabet);
removeBackgroundColorById(alphabet)



}