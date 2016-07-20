function scoreFrame ( frame, nextFrame ) {
   var score = frame[0] + frame[1]

  if (nextFrame){
    score += nextFrame[0]
  }
  return score
}

module.exports = {

  scoreFrame: scoreFrame

}
