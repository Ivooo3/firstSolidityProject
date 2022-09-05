const assert = require("assert");
const ganache = require("ganache-cli");
//its with capital letter because its constructor
//when using Web3 we will need a provider like ganache for example
const Web3 = require("web3");
//lower case means instance
const web3 = new Web3(ganache.provider());

class Car {
  park() {
    return "stopped";
  }

  drive() {
    return "vroom";
  }
}

//describe is used to contain batch of testing funcions
//first parameter is title of the set of tests
//second param is a function which executes functions which actually tests the code
describe("Car", () => {
  let car;
  beforeEach(() => {
    car = new Car();
  });

  it("can park", () => {
    //first is the param containing the value generated from the code and the second is the value of the wanted result
    assert.equal(car.park(), "stopped");
  });

  it("can drive", () => {
    assert.equal(car.drive(), "vroom");
  });
});
