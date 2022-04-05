// SPDX-License-Identifier: MIT-License
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint32 counter;

    event CounterInc(uint32 counter);

    function incrementCount() public {
        counter++;
        console.log("Counter is now: ", counter);
        emit CounterInc(counter);
    }

    function getCount() public view returns (uint32) {
        return counter;
    }
}
