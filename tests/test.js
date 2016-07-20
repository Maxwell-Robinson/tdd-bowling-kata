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
