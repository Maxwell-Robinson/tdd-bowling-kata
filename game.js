function scoreFrame ( frame, nextFrame ) {
   var ball1 = frame[0]
   var ball2 = frame[1]

  if (nextFrame){
    var ball3 = nextFrame[0]
    return ball1 + ball2 + ball3
  }
  else{
    return ball1 + ball2
  }
}

module.exports = {

  scoreFrame: scoreFrame

}
