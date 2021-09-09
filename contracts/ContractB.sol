// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ContractB {
    IERC20 meuToken;

    constructor(address _meuToken) {
        meuToken = IERC20(_meuToken);
    }

    function deposit1(uint256 amount) external {
        meuToken.transferFrom(msg.sender, address(this), amount);
    }

    function withdraw1(uint256 amount) external {
        meuToken.transfer(msg.sender, amount);
    }
}
