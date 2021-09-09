// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token2 is ERC20 {
    address private admin;

    constructor() ERC20("Token2", "TK2") {
        admin = msg.sender;
    }

    function faucet(uint256 amount) external {
        _mint(msg.sender, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    function transferir(uint256 amount) external {
        transfer(msg.sender, amount);
    }
}
