// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import {ERC20} from "openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract BiscoToken is ERC20 {
    uint public constant INITIAL_SUPPLY = 1000000;

    constructor() ERC20("Bisco Token", "BSC") {
        _mint(_msgSender(), INITIAL_SUPPLY * 10 ** decimals());
    }
}
