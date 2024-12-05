// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {BiscoToken} from "../../src/BiscoToken.sol";

contract BiscoTokenTest is Test {
    BiscoToken public token;

    function setUp() public {
        // Current contract is token owner
        token = new BiscoToken();
    }

    function test_Balance() public {
        uint initialSupply = token.INITIAL_SUPPLY() * 10 ** token.decimals();
        assertEq(token.totalSupply(), initialSupply);
        assertEq(token.balanceOf(address(this)), initialSupply);
    }
}
