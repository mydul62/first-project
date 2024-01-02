let newScore=localStorage.getItem('Score');
let score;
resetScore(newScore);

function resetScore(newScore){ 
  score = newScore ? JSON.parse(newScore) : {
    
    win:0,
    lost:0,
    tie:0,
    time:0,
    
  };
  score.displayscore=function(){
    return `win=${score.win},lost=${score.lost},tie=${score.tie},times=${score.time}`
    };
};
 




let computerChoice;
function genarateComputerChoice(){
  let randomNumber = Math.random()*3;
    if(randomNumber>0 && randomNumber<=1){
      computerChoice='bat';
    }else if(randomNumber>1 && randomNumber<=2){
      computerChoice='ball';
    }
    else{
      computerChoice='stamp';
    }
}

function result(userMoves,computerMoves){
  if(userMoves == 'bat'){
    if(computerMoves=='bat'){
      score.tie ++;
      score.time++;
      return 'tie';
    }else if(computerMoves=='stamp'){
      score.lost ++;
      score.time++;
      return 'computer won';
    }
    else if(computerMoves=='ball'){
      score.win ++;
      score.time++;
      return 'user won';
    }
  }else if(userMoves== 'ball'){
    if(computerMoves=='bat'){
      score.lost ++;
      score.time++;
      return 'computer won';
    }else if(computerMoves=='stamp'){
      score.win ++;
      score.time++;
      return 'user won';
    }
    else if(computerMoves=='ball'){
      score.tie ++;
      score.time++;
      return ' tie';
    }
  }else if(userMoves == 'stamp'){
    if(computerMoves=='bat'){
      score.win ++;
      score.time++;
      return 'user won';
    }else if(computerMoves=='stamp'){
      score.tie ++;
      score.time++;
      return 'tie';
    }
    else if(computerMoves=='ball'){
      score.lost ++;
      score.time++;
      return 'computer won';
    }
  }
}

function showResult(userMoves,computerMoves,finalResult){
  localStorage.setItem('Score',JSON.stringify(score));
  document.querySelector('.usrchoice').innerHTML =userMoves?`user choice is ${userMoves} `:' ';
  document.querySelector('.compchoice').innerHTML = computerMoves? `computer is ${computerMoves} `:' ';
  document.querySelector('.finalRslt').innerHTML =finalResult?`final result is ${finalResult} `:' ';
  document.querySelector('.score').innerHTML = score.displayscore();


  
;
}

