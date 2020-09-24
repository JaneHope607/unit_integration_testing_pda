var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add numbers and display total', function() {
    calculator.previousTotal = 6;
    calculator.add(1);
    assert.equal(7, calculator.runningTotal);
  })

  it('should be able to subtract numbers and display total', function() {
    calculator.previousTotal = 4;
    calculator.subtract(2);
    assert.equal(2, calculator.runningTotal);
  })

  it('should be able to multiply numbers and display total', function() {
    calculator.previousTotal = 10;
    calculator.multiply(5);
    assert.equal(50, calculator.runningTotal);
  })

  it('should be able to divide numbers and display total', function() {
    calculator.previousTotal = 12;
    calculator.divide(2);
    assert.equal(6, calculator.runningTotal);
  })

  it('should be able to concatenate multiple number button clicks', function() {
    calculator.numberClick(6);
    calculator.numberClick(1);
    calculator.numberClick(2);
    assert.equal(612, calculator.runningTotal);
  })

  it('should be able to chain multiple operations together', function() {
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(8);
    calculator.operatorClick('=');
    assert.equal(16, calculator.runningTotal);
  })

});
