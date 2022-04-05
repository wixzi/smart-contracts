import '@nomiclabs/hardhat-ethers';
import { Contract } from 'ethers';
import { ethers } from 'hardhat';

async function deploy() {
  const Counter = await ethers.getContractFactory('Counter');
  const counter = await Counter.deploy();
  await counter.deployed();
  console.log('Address: ', counter.address);
  return counter;
}

async function getCount(counter: Contract) {
  await counter.incrementCount();
  console.log('Counter', await counter.getCount());
}

deploy().then(getCount);
