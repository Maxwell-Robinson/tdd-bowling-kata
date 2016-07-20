function scoreFrame ( frame, nextFrame ) {
   var score = frame[0] //+ frame[1]

  if (frame[0] == 10){
    score += nextFrame[0] + nextFrame[1]
  }
  else if (frame[0] + frame[1] == 10){
    score += frame [1] + nextFrame[0]
  }
  else{
    score += frame[1]
  }
  return score
}

module.exports = {

  scoreFrame: scoreFrame

}
