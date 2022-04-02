import '@nomiclabs/hardhat-ethers';
import { Contract } from 'ethers';
import { ethers } from 'hardhat';

async function deploy() {
  const First = await ethers.getContractFactory('First');
  const first = await First.deploy();
  await first.deployed();
  return first;
}

async function sayHello(first: Contract) {
  console.log(await first.hello());
}

deploy().then(sayHello);
