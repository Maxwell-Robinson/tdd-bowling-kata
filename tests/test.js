var test = require('tape')
var game = require('../game')

test('scores a gutterball frame', function(t) {
  var frame = [0, 0]
  var score = game.scoreFrame(frame)
  t.equals(score, 0)
  t.end()
})

test('scores a normal frame', function(t) {
  var frame = [2, 3]
  var score = game.scoreFrame(frame)
  t.equals(score, 5)
  t.end()
})

test('scores a spare frame', function(t) {
  var frame = [4, 6]
  var nextFrame = [5,2]
  var score = game.scoreFrame(frame, nextFrame)
  t.equals(score, 15)
  t.end()
})

test('scores a single strike frame', function(t) {
  var frame = [10, 0]
  var nextFrame = [5,2]
  var score = game.scoreFrame(frame, nextFrame)
  t.equals(score, 17)
  t.end()
})

test('scores a double strike frame', function(t) {
  var frame = [10, 0]
  var nextFrame = [10, 0]
  var thirdFrame = [5, 2]
  var score = game.scoreFrame(frame, nextFrame, thirdFrame)
  t.equals (score, 25)
  t.end()
})

test('scores a game', function(t) {
  var frames = [[2, 4], [4, 6], [10, 0], [10, 0], [7, 2], [1, 9], [2, 2], [8, 0], [0, 4], [7, 1]]
  var score = game.scoreGame(frames)
  t.equals(score, 117)
  t.end()
})

test('checks to see if strike', function(t) {
  var frame = [10, 0]
  var isStrike = game.isStrike(frame)
  t.equals(isStrike, true)
  var frame1 = [5, 0]
  var isStrike1 = game.isStrike(frame1)
  t.equals(isStrike1, false, 'checks false positive')
  t.end()
})

test('checks to see if Spare', function(t) {
  var frame = [3, 7]
  var isSpare = game.isSpare(frame)
  t.equals(isSpare, true)
  var frame1 = [2, 6]
  var isSpare1 = game.isSpare(frame1)
  t.equals(isSpare1, false, 'checks false positive')
  t.end()
})

test('scores a spare in the 10th frame', function(t) {
  var frames = [[2, 4], [4, 6], [10, 0], [10, 0], [7, 2], [1, 9], [2, 2], [8, 0], [0, 4], [7, 3, 5]]
  var score = game.scoreGame(frames)
  t.equals(score, 124)
  t.end()
})

test('scores a double strike in the 9th frame', function(t) {
  var frames = [[2, 4], [4, 6], [10, 0], [10, 0], [7, 2], [1, 9], [2, 2], [8, 0], [10, 0], [10, 3, 5]]
  var score = game.scoreGame(frames)
  t.equals(score, 146)
  t.end()
})


