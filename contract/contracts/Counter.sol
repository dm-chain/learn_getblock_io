// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public count = 100;

    event Increment(address who);

    function increment() public {
        emit Increment(msg.sender);
        count += 1;
    }
}