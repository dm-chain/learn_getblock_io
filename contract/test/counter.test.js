const Counter = artifacts.require('Counter');

contract("Counter", function (accounts) {
  var counter;
  var owner = accounts[0];
  var user1 = accounts[1];
  var user2 = accounts[2];

  beforeEach(async function () {
    counter = await Counter.deployed();
  });

  it("should start with a count of 0", function () {
    return counter.count.call().then(function (count) {
      assert.equal(count.toNumber(), 100);
    });
  });

  it("should be able to increment the count", async function () {
    var ret =  await counter.increment.call();
    console.log(ret);
    var count = await counter.count.call();
    assert.equal(count.toNumber(), 101);
  });

});
