const getUserChoice=(userInput)=>{
    userInput=userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' ||userInput==='scissors'||userInput==='bomb') {
   return userInput;
 } else {
   console.log('Error!');
 }
 };
 
 const getComputerChoice=()=>{
   randomNumber=Math.floor(Math.random()*3);
   switch(randomNumber){
     case 0:
     return 'rock';
     case 1:
     return 'paper';
     case 2:
     return 'scissors';
   }
 };
 
 const determineWinner=(userChoice,computerChoice)=>{
   if (userChoice===computerChoice){
     return 'ooh! game is tie'
   }
   if (userChoice==='rock'){
     if(computerChoice==='paper'){
       return 'sorry ! you loose'
     } else{
       return 'you won!'
     }
   }
   if (userChoice==='paper'){
     if(computerChoice==='scissors'){
       return 'sorry ! you loose'
     } else{
       return 'you won!'
     }
   }
   if (userChoice==='scissors'){
     if(computerChoice==='rock'){
       return 'sorry ! you loose'
     } else{
       return 'you won!'
     }
   }
   if(userChoice==='bomb'){
     return 'you won!'
   }
 
   
 }
 
 
 const playGame=()=>{
   var userChoice=getUserChoice('rock');
   var computerChoice=getComputerChoice();
   console.log('you choose='+userChoice);
   console.log('computer choose='+computerChoice);
   console.log(determineWinner(userChoice,computerChoice));
 }
  playGame();
 