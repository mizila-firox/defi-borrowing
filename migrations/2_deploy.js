const Token1 = artifacts.require("Token1");
const Token2 = artifacts.require("Token2");
const Token3 = artifacts.require("Token3");
const ContractA = artifacts.require("ContractA");

module.exports = async (deployer) => {
  try {
    deployer.then(async () => {
      const t1 = await deployer.deploy(Token1);
      const t2 = await deployer.deploy(Token2);
      const t3 = await deployer.deploy(Token3);

      const contractA = await deployer.deploy(
        ContractA,
        t1.address,
        t2.address,
        t3.address
      );

      console.log("contracts deployed");
    });
  } catch (error) {}
};
