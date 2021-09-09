const ContractA = artifacts.require("ContractA.sol");
const Token1 = artifacts.require("Token1.sol");
const Token2 = artifacts.require("Token2.sol");
const Token3 = artifacts.require("Token3.sol");

module.exports = async (teste) => {
  try {
    console.log(teste);
    const [account] = await web3.eth.getAccounts();
    const contractA = await ContractA.deployed();
    const token1 = await Token1.deployed();
    const token2 = await Token2.deployed();
    const token3 = await Token3.deployed();

    // let balance = await token1.balanceOf(account);
    // console.log(`balance of this account: ${balance}`);

    const value = web3.utils.toWei("1");
    // await token1.transfer(contractA.address, balance);
    await token1.approve(contractA.address, value);

    // let balanceContractA = await token1.balanceOf(contractA.address);
    // console.log(`balanceContractA: ${balanceContractA}`);

    // balance = await token1.balanceOf(account);
    // console.log(`after balance of this account: ${balance}`);

    // balanceT2 = await token2.balanceOf(account);
    // console.log(`after balanceT2 of this account: ${balanceT2}`);

    // console.log(token2.methods);
    // let contractABalanceT2 = await token2.balanceOf(contractA.address);
    // console.log(`contractABalanceT2  BEFORE: ${contractABalanceT2}`);

    // let meuSaldo = await token2.balanceOf(account);
    // console.log(`meuSaldo T2 BEFORE: ${meuSaldo}`);

    const swap = await contractA.swap(value);
    console.log(swap);

    console.log("--------------------");
    console.log("        ----        ");
    console.log("--------------------");

    let balanco = await token1.balanceOf(account);
    console.log(`t1 acc: ${balanco}`);

    meuSaldo = await token2.balanceOf(account);
    console.log(`t2 acc: ${meuSaldo}`);

    let t3_balance = await token3.balanceOf(account);
    console.log(`t3 acc: ${t3_balance}`);

    let t1_balance_contract = await token1.balanceOf(contractA.address);
    console.log(`t1 contract, should be ZERO: ${t1_balance_contract}`);

    let t2_balance_contract = await token2.balanceOf(contractA.address);
    console.log(`t2 contract, should be ZERO: ${t2_balance_contract}`);

    let t3_balance_contract = await token3.balanceOf(contractA.address);
    console.log(`t3 contract, should be ZERO: ${t3_balance_contract}`);

    // t1 acc = 30000000..
    // t2 acc = 0
    // t3 acc = 100. 00 0000

    // t1 A = 0
    // t2 A = 0
    // t3 A = 0

    // await meuToken.approve(contractA.address, value);
    // await contractA.deposit(value, contractB.address);

    // aBalance = await meuToken.balanceOf(contractA.address);
    // console.log(`contractA balance: ${aBalance}`);

    // // // -----
    // balance = await meuToken.balanceOf(account);
    // console.log(`after balance of this account: ${balance}`);

    // aBalance = await meuToken.balanceOf(contractA.address);
    // console.log(`after contractA balance: ${aBalance}`);

    // bBalance = await meuToken.balanceOf(contractB.address);
    // console.log(`after contractB balance: ${bBalance}`);

    // console.log("WITHDRAWING VALUES");

    // // await contractA.withdraw(value);
    // balance = await meuToken.balanceOf(account);
    // eBalance = await meuToken.balanceOf(contractA.address);
    // bBalance = await meuToken.balanceOf(contractB.address);
    // console.log(`balance of this account: ${balance}`);
    // console.log(`contractA balance: ${eBalance}`);
    // console.log(`contractB balance: ${bBalance}`);
    //

    console.log("done!");
  } catch (error) {
    console.log(error);
  }
};
