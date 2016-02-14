var code = require('../main');
var expect = require('chai').expect;

describe('Tax Calculator', function(){

  it('should tax 10% on the first $10', function() {
    expect(code.calcTax(1)).to.equal(0.1);
    expect(code.calcTax(10)).to.equal(1);
  });

  it('should tax 7% on the second $10', function(){
    expect(code.calcTax(18)).to.equal(1.56);
  });

  it('should tax 5% on the third $10', function (){
    expect(code.calcTax(28)).to.equal(2.1);
  });

  it('should tax 3% on remaining $', function(){
    expect(code.calcTax(46)).to.equal(2.68);
    expect(code.calcTax(95)).to.equal(4.15);
  });

});
