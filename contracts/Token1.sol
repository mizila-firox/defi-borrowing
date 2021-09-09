// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token1 is ERC20 {
    constructor() ERC20("Token1", "TK1") {
        _mint(msg.sender, 3 * 10**18);
    }
}
