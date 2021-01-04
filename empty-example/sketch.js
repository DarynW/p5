// import { teamThings } from './classTeam.js'
let team1, team2, team3, team4, value, value2, button1, button2, button3, button4, inp1, inp2, inp3, inp4, inputWindowWidth, inputWindowHeight, name1, name2, name3, name4, rng1, rng2, rng3, rng4, rngF1, rngF2;
let scoreSet = true;
let scoreSet2 = true;
let scoreSet3 = true;
let rgb = 0;
let done, done2, final, done3, finalDone;
let LCF, RCF, winner;
function setup() {
  value2 = false;
  value = false;
  final = false;
  done = 0;
  done2 = 0;
  done3 = 0;
  finalDone = 0;
  inputWindowWidth = windowWidth*0.19;
  inputWindowHeight = windowHeight*0.28;
  inp1 = createInput('');
  inp1.input(myInputEvent1);
  inp1.position(windowWidth*0.1, windowHeight*0.3)
  inp1.size(inputWindowWidth*0.7-40, inputWindowWidth*0.2-35)

  inp2 = createInput('');
  inp2.input(myInputEvent2);
  inp2.position(windowWidth*0.8, windowHeight*0.3)
  inp2.size(inputWindowWidth*0.7-40, inputWindowWidth*0.2-35)

  inp3 = createInput('');
  inp3.input(myInputEvent3);
  inp3.position(windowWidth*0.1, windowHeight*0.6)
  inp3.size(inputWindowWidth*0.7-40, inputWindowWidth*0.2-35)

  inp4 = createInput('');
  inp4.input(myInputEvent4);
  inp4.position(windowWidth*0.8, windowHeight*0.6)
  inp4.size(inputWindowWidth*0.7-40, inputWindowWidth*0.2-35)

  
  createCanvas(windowWidth, windowHeight);
  buttons();
  
}
function myInputEvent1() {
  name1 = this.value();
  console.log('name1 is: ', name1);
}
function myInputEvent2() {
  name2 = this.value();
  console.log('name2 is: ', name2);
}
function myInputEvent3() {
  name3 = this.value();
  console.log('name3 is: ', name3);
}
function myInputEvent4() {
  name4 = this.value();
  console.log('name4 is: ', name4);
}
function createNewTeams(){
  team1 = new TeamThings(name1, rng1)
  console.log(name1 + ' has: ' + team1.getScore())
  team3 = new TeamThings(name3, rng3)
  console.log(name3 + ' has: ' + team3.getScore())
  team2 = new TeamThings(name2, rng2)
  console.log(name1 + ' has: ' + team1.getScore())
  team4 = new TeamThings(name4, rng4)
  console.log(name3 + ' has: ' + team3.getScore())
}
function draw() {
  console.log('NEW DRAW_________')
  // put drawing code here
  
  // inp1.input(myInputEvent1);
  // inp2.input(myInputEvent2);

  colorMode(RGB, 255)
  background(245);
  fill(1);
  textAlign(CENTER, TOP)
  text('EZ Bracket', windowWidth*0.485, windowHeight*0.05)
  textSize(15)
  text('created by: Daryn Wang', windowWidth*0.485, windowHeight*0.112)
  text('(btw these buttons do not work)', windowWidth*0.485, windowHeight*0.18)

  //Instruction boxes
  fill (190)
  rect(inputWindowWidth*.15, inputWindowHeight*.15, inputWindowWidth*1.6, inputWindowWidth*0.5, 5);
  textSize(12)
  fill(1)
  textAlign(LEFT)
  text('INSTRUCTIONS', inputWindowWidth*.18, inputWindowHeight*.18)
  text('1. Put your browser in fullscreen for best viewing experience', inputWindowWidth*.18, inputWindowHeight*.25)
  text('2. click the white input boxes and input the names of your teams/objects', inputWindowWidth*.18, inputWindowHeight*.32)
  text('3. click the calculate score button to start RNGed scores', inputWindowWidth*.18, inputWindowHeight*.39)
  text('4. click it again to finalize scores', inputWindowWidth*.18, inputWindowHeight*.46)
  text('5. repeat steps 3-4 for the other bracket and for the championship', inputWindowWidth*.18, inputWindowHeight*.53)
  text('6. See who won! and refresh page to play again', inputWindowWidth*.18, inputWindowHeight*.60)

  fill(255, 204, 0)
  rect(inputWindowWidth*0.47, inputWindowHeight, inputWindowWidth*0.7, inputWindowWidth*0.2, 20);
  rect(inputWindowWidth+(0.6*windowWidth), inputWindowHeight, inputWindowWidth*0.7, inputWindowWidth*0.2, 20);
  rect(inputWindowWidth+(0.6*windowWidth), inputWindowHeight+(0.3*windowHeight), inputWindowWidth*0.7, inputWindowWidth*0.2, 20);
  rect(inputWindowWidth*0.47, inputWindowHeight+(0.3*windowHeight), inputWindowWidth*0.7, inputWindowWidth*0.2, 20);

  //round 2 rectangles
  rect(inputWindowWidth+(0.08*windowWidth), inputWindowHeight+(0.15*windowHeight), inputWindowWidth*0.7, inputWindowWidth*0.2, 20);
  rect(inputWindowWidth+(0.407*windowWidth), inputWindowHeight+(0.15*windowHeight), inputWindowWidth*0.7, inputWindowWidth*0.2, 20);


  //Bracket lines
  line(inputWindowWidth*1.17, inputWindowHeight*1.12, inputWindowWidth*1.3, inputWindowHeight*1.12)
  line(inputWindowWidth*1.17, (inputWindowHeight+(0.3*windowHeight))*1.06, inputWindowWidth*1.3, (inputWindowHeight+(0.3*windowHeight))*1.06)
  line(inputWindowWidth*1.3, inputWindowHeight*1.12, inputWindowWidth*1.3, (inputWindowHeight+(0.3*windowHeight))*1.06)
  line(inputWindowWidth*1.3, (inputWindowHeight+(0.3*windowHeight))*0.8, inputWindowWidth*1.42, (inputWindowHeight+(0.3*windowHeight))*0.8)

  line(inputWindowWidth*4, inputWindowHeight*1.12, inputWindowWidth*4.155, inputWindowHeight*1.12)
  line(inputWindowWidth*4, (inputWindowHeight+(0.3*windowHeight))*1.06, inputWindowWidth*4.155, (inputWindowHeight+(0.3*windowHeight))*1.06)
  line(inputWindowWidth*4, inputWindowHeight*1.12, inputWindowWidth*4, (inputWindowHeight+(0.3*windowHeight))*1.06)
  line(inputWindowWidth*4, (inputWindowHeight+(0.3*windowHeight))*0.8, inputWindowWidth*3.845, (inputWindowHeight+(0.3*windowHeight))*0.8)

  //text('hi', 200, 200)
  //rng
  //text(floor(Math.random()*100), inputWindowWidth-100, inputWindowHeight)
  if (done>0){
    fill(0)
    textSize(16)
    text(movesToNext(team1, team3), inputWindowWidth*1.55, inputWindowHeight*1.62);
  }
  if (done2>0){
    fill(0)
    textSize(16)
    text(movesToNext(team2, team4), inputWindowWidth*3.25, inputWindowHeight*1.62);
  }
  
  
  textSize(12)
  if(value){
    rng1 = ((floor(Math.random()*101)))
    rng3 = ((floor(Math.random()*101)))
    // console.log('running' + rng1)
  }
  if(value2){
    rng2 = ((floor(Math.random()*101)))
    rng4 = ((floor(Math.random()*101)))
    // console.log('running' + rng1)
  }
  console.log("VAL: " + value)
  fill(1)
  text(rng1, inputWindowWidth*0.4, inputWindowHeight*1.15) 
  text(rng3, inputWindowWidth*0.4, (2*inputWindowHeight)*1.1) 
  text(rng2, inputWindowWidth*4.9, inputWindowHeight*1.15) 
  text(rng4, inputWindowWidth*4.9, (2*inputWindowHeight)*1.1) 

  
  createNewTeams();
  // if (!value)
  // {
  //   console.log(movesToNext(team1, team3) + ' is moving on!')
  // }
  if (done == 1 && done2 ==1){
    done3++;
  }
  if (done3 == 1){
    finalRound();
    console.log('RUNNING')
  }
  console.log('DONES: ' + done + ' ' + done2)
  if (done3 > 0){
    text(rngF1, inputWindowWidth*2.2, inputWindowHeight*1.65)
    text(rngF2, inputWindowWidth*3, inputWindowHeight*1.65)
  }
  textSize(50)
  if (finalDone > 0)
  {
    rgb++;
    colorMode(HSL,360)
    if (rgb >360){
      rgb =0;
    }
    fill(rgb, 200, 200)
    textAlign(CENTER, BASELINE)
    text(winner.getName() + ' IS/ARE THE CHAMPION(S)', windowWidth*.5, windowHeight*0.8)
    button1.remove()
    button2.remove()
    button3.remove()
    button4.remove()
    // inp1.remove()
    // inp2.remove()
    // inp3.remove()
    // inp4.remove()
  }
  console.log('final done = ' + finalDone)

  
  if (final){
    rngF1 = floor(Math.random()*101)
    rngF2 = floor(Math.random()*101)
  }
}

function isWinning(t1, t3){
  if (t1.getScore() > t3.getScore())
    return t1;
  else
    return t3;
}

function movesToNext(t1, t3){
  return (isWinning(t1, t3).getName());
}


function nextRound() {
  value = !value
  scoreSet = !scoreSet;
  if (scoreSet){
    done = 1;
    console.log(movesToNext(team1, team3) + ' is moving on!') 
    game1Button.remove();

  }

}

function nextRound2() {
  value2 = !value2
  scoreSet2 = !scoreSet2;
  if (scoreSet2){
    done2 = 1;
    console.log(movesToNext(team2, team4) + ' is moving on!') 
    game2Button.remove();

  }
}

function finalRound(){
  gameFinal = createButton('calculate score')
  gameFinal.position(inputWindowWidth*2.4, 0.4*(inputWindowHeight+inputWindowHeight+(0.3*windowHeight)));
  gameFinal.mousePressed(initiateFinalRound)
  console.log('entering final round')

}
function initiateFinalRound(){
  final = !final;
  scoreSet3 = !scoreSet3
  // rngF1 = floor(Math.random()*101)
  // rngF2 = floor(Math.random()*101)
  LCF = isWinning(team1, team3)
  RCF = isWinning(team2, team4)
  LCF.setScore(rngF1)
  RCF.setScore(rngF2)
  winner = isWinning(RCF, LCF)
  if (scoreSet3){
    finalDone++;
    console.log(winner.getName() + ' HAS WON!!!')
    gameFinal.remove();
  }



}

// function createButtons(number, windowW){
//   createButton('${number}')
//   this.position(windownWidth*windowW, windowHeight*0.1)
// }
function buttons(){
  button1 = createButton('4');
  button1.position(windowWidth*0.4, windowHeight*0.15);
  button1.mousePressed(changeBG);

  button2 = createButton('8');
  button2.position(windowWidth*0.45, windowHeight*0.15);
  button2.mousePressed(changeBG);

  button3 = createButton('16')
  button3.position(windowWidth*0.5, windowHeight*0.15);
  button3.mousePressed(changeBG);

  button4 = createButton('32');
  button4.position(windowWidth*0.55, windowHeight*0.15);
  button4.mousePressed(changeBG);

  game1Button = createButton('calculate score')
  game1Button.position(inputWindowWidth*0.8, 0.53*(inputWindowHeight+inputWindowHeight+(0.3*windowHeight)));
  game1Button.mousePressed(nextRound)

  game2Button = createButton('calculate score')
  game2Button.position(inputWindowWidth*4.15, 0.53*(inputWindowHeight+inputWindowHeight+(0.3*windowHeight)));
  game2Button.mousePressed(nextRound2)
}

// function RNGCalculator(){
//   floor(Math.random()*100)


// }









//Brackets






/*
let input;
input = createInput();
  input.position(20, 65);
*/

function changeBG() {
  let val = random(51);
  button.style('button-color', val);
}
class TeamThings {
  constructor(name, score){
     this.name = name;
     this.score = score;
  }
  getName(){
      return this.name;
  }
  getScore(){
      return this.score;
  }
  setScore(num){
    this.score = num;
  }
}