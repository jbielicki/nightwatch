var MockServer  = require('mockserver');
    
module.exports = {
  setUp: function (callback) {
    this.server = MockServer.init();
    this.client = require('../../nightwatch.js').init();
    
    callback();
  },
  
  testSuccess : function(test) {
    this.client.waitForElementPresent('#weblogin', 100, function callback(result) {
      test.ok(result !== false);
      test.done();
    });
  },
  
  testFailure : function(test) {
    this.client.waitForElementPresent('.weblogin', 600, function callback(result) {
      test.equal(result, false);
      test.done();
    });
  },
              
  tearDown : function(callback) {
    this.client = null;
    this.server.close();
    this.server = null;
    // clean up
    callback();
  }
}