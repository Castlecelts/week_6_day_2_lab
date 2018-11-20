const assert = require('assert');
const Decorator = require('../decorator')
const Paint = require('../paint')
const Room = require('../room')

describe('Decorator', function(){
  let decorator;
  let paint1;
  let paint2;
  let room;

  beforeEach(function() {
    decorator = new Decorator();
    paint1 = new Paint(5);
    paint2 = new Paint(2);
    room = new Room(7);
  })

  it('should start with an empty paint stock', function(){
    const actual = decorator.paintStock.length;
    assert.strictEqual(actual, 0)
  })

  it('should be able to add a can of paint to the stock', function(){
    decorator.addPaint(paint1);
    const actual = decorator.paintStock.length;
    assert.strictEqual(actual, 1)
  })

  it('should be able to calculate the total number of litres in stock', function(){
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    const actual = decorator.totalLitres();
    assert.strictEqual(actual, 7)
  })

  it('should be able to calculate if there is enough paint to paint a room -- false', function() {
    const actual = decorator.hasEnoughPaint(room);
    assert.strictEqual(actual, false);
  })

  it('should be able to calculate if there is enough paint to paint a room -- true', function() {
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    const actual = decorator.hasEnoughPaint(room);
    assert.strictEqual(actual, true);
  })

  it('should be able to paint a room -- has enough paint', function() {
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    decorator.paintRoom(room);
    const actual = room.painted;
    assert.strictEqual(actual, true);
  })

  it('should be able to paint a room -- not enough paint', function() {
    decorator.paintRoom(room);
    const actual = room.painted;
    assert.strictEqual(actual, false);
  })

});
