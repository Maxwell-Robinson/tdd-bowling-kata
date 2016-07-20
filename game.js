function scoreFrame ( frame ) {
   var ball1 = frame[0]
   var ball2 = frame[1]
   return ball1 + ball2
}

module.exports = {

  scoreFrame: scoreFrame

}
