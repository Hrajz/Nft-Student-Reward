async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const RewardNFT = await ethers.getContractFactory("RewardNFT");
  const rewardNFT = await RewardNFT.deploy();
//   await rewardNFT.deployed();

  console.log("RewardNFT deployed to:", rewardNFT);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
