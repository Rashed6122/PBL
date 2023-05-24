// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const tokens = n => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

async function main() {
  const [deployer] = await ethers.getSigners();

  // Deploy Dappazon
  const camp_cahin = await hre.ethers.getContractFactory("camp_chain");
  const campu_cahin = await camp_cahin.deploy();
  await campu_cahin.deployed();

  console.log(`Deployed camp_chain Contract at: ${campu_cahin.address}\n`);
}
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
