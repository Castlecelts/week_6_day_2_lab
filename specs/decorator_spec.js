const assert = require('assert');
const Decorator = require('../decorator')
const Paint = require('../paint')

describe('Decorator', function(){
  let decorator;
  let paint1;
  let paint2;

  beforeEach(function() {
    decorator = new Decorator();
    paint1 = new Paint(5);
    paint2 = new Paint(2);
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
});
