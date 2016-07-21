function scoreFrame (frame, nextFrame, thirdFrame) {

  if (isStrike(frame)) {
    return scoreStrike(frame, nextFrame, thirdFrame)
  }

  if (isSpare(frame)) {
    return scoreSpare(frame, nextFrame)
  }
  return frame[0] + frame[1]
}




function scoreGame ( frames ) {
  var totalScore = 0
  for (var i = 0; i < frames.length; i++) {
    totalScore += scoreFrame(frames[i], frames[i+1], frames[i+2])
  } return totalScore
}

function isStrike(frame){
  return (frame[0] == 10)
}

function scoreStrike(frame, nextFrame, thirdFrame) {
  var score = frame[0] + nextFrame[0]

  if (nextFrame[0] == 10){
    score += thirdFrame[0]
  }
  else {
    score += nextFrame[1]
  }
  return score
}

function isSpare(frame){
    return frame[0] + frame[1] == 10
}

function scoreSpare(frame, nextFrame){
  return frame[0] + frame[1] + nextFrame[0]
}
module.exports = {

  scoreFrame: scoreFrame,
  scoreGame: scoreGame,
  isStrike: isStrike,
  isSpare: isSpare

}
