
    let winElement=document.querySelector('.game-result');
    let choicesDisplay=document.querySelector('.choices-display');
    let scoreBoard=document.querySelector('.score');
    let AutoPlayActive=false;
    let autoPlayButton=document.querySelector('.auto-play-button');
    let autoPlayTimeNumber=0;

    let playInterval=null;


let Score=JSON.parse(localStorage.getItem('Score'))||{
    LossNumber:0,
    WinNumber:0,
    TieNumber:0
};


scoreBoard.innerHTML = `win: ${Score.WinNumber} .Loss : ${Score.LossNumber}.Tie : ${Score.TieNumber}`;

function ComputerChoice(){

      let computerChoice;
      let randomNumber=Math.random();

      if(randomNumber<0.3){
    computerChoice="rock";
        }else if((randomNumber>0.3)&&(randomNumber<0.6)){
         computerChoice="paper";
         }else if(randomNumber>0.6){
             computerChoice="scissors";
                    }

         return computerChoice;

          }

   











function determineResult(humanChoice,computerChoice){
    
    let result;

    if( humanChoice==="rock"){
        if(computerChoice==="rock"){result="Tie"}
        if(computerChoice==="paper"){result="loss"}
        if(computerChoice==="scissors"){result="win"}
         
    }

       if(humanChoice==="paper"){
        if(computerChoice==="rock"){result="win"}
        if(computerChoice==="paper"){result="Tie"}
        if(computerChoice==="scissors"){result="loss"}
         
    }
     if(humanChoice==="scissors"){
        if(computerChoice==="rock"){result="loss"}
        if(computerChoice==="paper"){result="win"}
        if(computerChoice==="scissors"){result="Tie"}
         
    }
  
    if(result==="loss"){Score.LossNumber++}else if(result==="win"){
        Score.WinNumber++;
    }else if(result==="Tie"){
        Score.TieNumber++;
    }
    
    winElement.innerHTML=`You ${result}`;

    choicesDisplay.innerHTML=`You :
        <img src="images/${humanChoice}-emoji.png" class="move-icon">
        <img src="images/${computerChoice}-emoji.png" class="move-icon">
        Computer `;
    scoreBoard.innerHTML=`win: ${Score.WinNumber}  .Loss : ${Score.LossNumber}.Tie : ${Score.TieNumber} `;   
    localStorage.setItem("Score",JSON.stringify(Score));


}



function AutoPlay(){
    AutoPlayActive=!AutoPlayActive;
    if(!AutoPlayActive){
        if(playInterval!=null){
        clearInterval(playInterval);
        playInterval=null;
        }
        if(autoPlayTimeNumber>0){
              autoPlayButton.classList.remove('Stop');  
            autoPlayButton.classList.add('auto-play-button');
             autoPlayButton.innerHTML='Auto Play';

        }


    }else{
      autoPlayButton.classList.remove('auto-play-button');  
      autoPlayButton.classList.add('Stop');
      autoPlayButton.innerHTML='Stop';
      playInterval=setInterval(function (){determineResult(ComputerChoice(),ComputerChoice())},2000);
      autoPlayTimeNumber++;
    }

}
















function restoreScore() {
    Score.LossNumber = 0;
    Score.TieNumber = 0;
    Score.WinNumber = 0;

  scoreBoard.innerHTML = `win: ${Score.WinNumber} .Loss : ${Score.LossNumber}.Tie : ${Score.TieNumber}`;


    localStorage.setItem("Score", JSON.stringify(Score));
}



localStorage.setItem("Score",JSON.stringify(Score));
 



