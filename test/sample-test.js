const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Transactions = await ethers.getContractFactory("Transactions");
    const Transactions = await Transactions.deploy("Hello, world!");
    await Transactions.deployed();

    expect(await Transactions.greet()).to.equal("Hello, world!");

    const setGreetingTx = await Transactions.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await Transactions.greet()).to.equal("Hola, mundo!");
  });
});
