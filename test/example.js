var expect = require('chai').expect;

describe('testing', function () {
  context('when asserts work', function(){
    it('passes', function(){
      expect(1).to.equal(1);
    });
  });

  context('when asserts are violated', function(){
    it('fails', function(){
      expect(1).to.equal("not a number");
    });
  });
});
