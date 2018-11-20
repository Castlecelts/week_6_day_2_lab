const assert = require('assert');
const Paint = require('../paint');

describe('Paint', function() {
  let paint;

  beforeEach(function() {
    paint = new Paint(5);
  })

  it('should have a number of litres', function() {
    const actual = paint.litres;
    assert.strictEqual(actual, 5);
  })

  it('should be able to check if it is empty -- not empty', function() {
    const actual = paint.checkIfEmpty();
    assert.strictEqual(actual, false);
  })

  it('should be able to check if it is empty --  empty', function() {
    paint.litres = 0;
    const actual = paint.checkIfEmpty();
    assert.strictEqual(actual, true);
  })

  it('should be able to empty itself of paint', function(){
    paint.emptyPaint();
    const actual = paint.checkIfEmpty();
    assert.strictEqual(actual, true);
  })
})
