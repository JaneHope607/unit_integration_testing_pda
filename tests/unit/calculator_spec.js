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

});
