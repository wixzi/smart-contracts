import '@nomiclabs/hardhat-ethers';
import { ethers } from 'hardhat';
import { expect } from 'chai';

describe('first contract', function () {
  it('should say hi', async function () {
    // 1. setup
    // 2. deploy our contract
    // 3. call our functions to test
    const HelloWorld = await ethers.getContractFactory('First');
    const hello = await HelloWorld.deploy();
    // Awaits contract is deployed to network
    await hello.deployed();

    expect(await hello.hello()).to.equal('Hello, First Contract');
  });
});
