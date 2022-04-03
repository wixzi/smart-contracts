import { ethers } from 'ethers';

function getEth() {
  // @ts-expect-error
  const eth = window.ethereum;
  if (!eth) {
    throw new Error('No metamask extension found!!');
  }
  return eth;
}

async function hasAccounts() {
  const eth = getEth();
  const accounts = (await eth.request({ method: 'eth_accounts' })) as string[];
  return accounts && accounts.length;
}

async function requestAccounts() {
  const eth = getEth();
  const accounts = (await eth.request({
    method: 'eth_requestAccounts',
  })) as string[];
  return accounts && accounts.length;
}

async function run() {
  if (!(await hasAccounts()) && !(await requestAccounts())) {
    throw new Error('Metamask is not working as expected!!!');
  }
  const hello = new ethers.Contract(
    '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    ['function hello() public pure returns (string memory)'],
    new ethers.providers.Web3Provider(getEth())
  );
  document.body.innerHTML = await hello.hello();
}

run();
