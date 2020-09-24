const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('the number buttons should update the display of running total', function() {
    element(by.css('#number4')).click();
    element(by.css('#number4')).click();
    running_total = element(by.css('#running_total'));
    expect(running_total.getAttribute('value')).to.eventually.equal('44')
  })

});
