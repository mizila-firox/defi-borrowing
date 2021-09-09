// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token3 is ERC20 {
    constructor() ERC20("Token3", "TK3") {}

    function buyit() external {
        _mint(msg.sender, 100 * 10**18);
    }
}
