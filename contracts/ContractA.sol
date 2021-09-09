// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";

// import "contracts/ContractB.sol";

interface Teste {

}

interface ITk2 is IERC20 {
    function faucet(uint256 amount) external;

    function burn(uint256 amount) external;

    function transferir(uint256 amount) external;
}

interface ITk3 is IERC20 {
    function buyit() external;
}

contract ContractA {
    IERC20 public T1;
    // IERC20 public T2;
    ITk2 public T2;
    ITk3 public T3;

    constructor(
        address t1,
        address t2,
        address t3
    ) {
        T1 = IERC20(t1);
        T2 = ITk2(t2);
        T3 = ITk3(t3);
    }

    function swap(uint256 amount) external {
        //first approve this contract from js
        require(T1.allowance(msg.sender, address(this)) == 1 ether);
        T1.transferFrom(msg.sender, address(this), amount);
        T1.approve(address(T2), amount);
        T2.faucet(amount);
        //do arbitrage here
        require(T2.balanceOf(address(this)) == 1 ether, "balance not enough");
        T3.buyit();
        T3.transfer(msg.sender, T3.balanceOf(address(this)));
        T2.burn(amount);
        T1.transfer(msg.sender, amount);

        // t1 acc = 30000000..
        // t1 A = 0

        // t2 acc = 0
        // t2 A = 0

        // t3 acc = 100. 00 0000
        // t3 A = 0
    }

    function withdraw(uint256 amount) external {
        // meuToken.transfer(msg.sender, amount);
    }
}
