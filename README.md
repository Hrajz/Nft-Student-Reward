
# NFT Student Rewards

A decentralized application (dApp) that allows students to receive and manage NFT-based rewards for their professional and academic achievements using blockchain technology. Built with React for the frontend and Solidity for the smart contract 

## Features

- **Award NFTs**: Award NFTs to students with descriptions and dates of their achievements.
- **View Achievements**: Students can view their achievements, including descriptions and dates.
- **Delete Achievements**: Only the owner of an achievement can delete it.
- **Deploy Smart Contracts**: Deploy and interact with smart contracts on the Arbitrum Orbit blockchain.
- **Frontend**: React-based user interface for interacting with the blockchain.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (version 18.x or later recommended).
- **Git**: Ensure you have Git installed.

### Setting Up the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Hrajz/Nft-Student-Reward.git
   cd Nft-Student-Reward
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the dependencies for both the backend and frontend.

   ```bash
   # Install dependencies (Smart Contracts)
   npm install

   # Install frontend dependencies (React app)
   cd ../frontend
   npm install
   ```

3. **Setup Environment Variables**

   **Frontend**

   Create a `.env` file in the `frontend` directory for environment variables. Add your required environment variables such as API keys and contract addresses.

   Example `.env` file for the frontend:

   ```env
   REACT_APP_CONTRACT_ADDRESS=0xYourContractAddress
   ```

   **smart contract**

   `.env` file for the smart contract:

   ```env
   INFURA_PROJECT_ID=your-infura-project-id
   INFURA_PROJECT_SECRET=your-infura-project-secret
   ```

### Running the Project

1. **Start the Smart Contracts**

   Navigate to the `root` directory and deploy the smart contract:

   ```bash
   npx hardhat run scripts/deploy.js --network <network>
   ```

2. **Start the Frontend (React App)**

   Navigate to the `frontend` directory and start the React application:

   ```bash
   cd ../frontend
   npm start
   ```

   The application should now be running on `http://localhost:3000` or another port specified by your configuration.

## Running the NFT Student Rewards Site

### 1. **Connect Your Wallet**

To interact with the dApp, you need a cryptocurrency wallet. If you don't have one, follow these steps to create and connect it:

**a. Install a Wallet Extension**

1. **MetaMask** (recommended) is a popular choice. Download and install the MetaMask extension for your browser (Chrome, Firefox, etc.) from [MetaMask’s official website](https://metamask.io/download.html).

2. **Other Wallets**: If you prefer other wallets like Trust Wallet or Coinbase Wallet, make sure they are compatible with the Ethereum network or the network you are using (Arbitrum Orbit in this case).

**b. Create a Wallet (if you don’t have one)**

1. Open the wallet extension you installed.
2. Follow the instructions to create a new wallet:
   - Set up a strong password.
   - Securely back up your seed phrase (recovery phrase) and store it in a safe place. This is crucial for recovering your wallet.

**c. Connect Wallet to the dApp**

1. Open the NFT Student Rewards site in your browser.
2. Click on the “Connect Wallet” button usually found in the top right corner of the site.
3. Select your wallet from the list (e.g., MetaMask).
4. Authorize the connection if prompted.

### 2. **Configure Your Network**

Ensure you are connected to the correct blockchain network that your dApp is using. 

**For MetaMask:**

1. Click on the MetaMask extension icon.
2. In the network dropdown (top center), select the network your dApp is deployed on (e.g., Arbitrum Orbit).
3. If the network is not listed, add it manually by entering the network details provided by your dApp or project.

### 3. **Use the dApp**

With your wallet connected and the correct network selected, you can now interact with the dApp. Here are some common tasks you might perform:

**a. Award NFTs**

1. Navigate to the appropriate section of the dApp where you can award NFTs.
2. Enter the student’s address, description, and date for the achievement.
3. Confirm the transaction in your wallet.

**b. View Achievements**

1. Go to the section where you can view achievements.
2. The dApp should display a list of achievements associated with your address, including descriptions and dates.

**c. Delete Achievements**

1. If you want to delete an achievement, navigate to the relevant section.
2. Select the achievement you wish to delete.
3. Confirm the deletion in your wallet if prompted.

### 4. **Troubleshooting**

**a. Wallet Not Connecting**

- Ensure that you have the correct network selected in your wallet.
- Refresh the page and try connecting again.
- Check for any browser extensions or settings that might block the connection.

**b. Transactions Not Showing**

- Ensure that your wallet has enough funds to cover transaction fees (gas fees).
- Check the transaction history in your wallet or the blockchain explorer for the network you are using.


### Contributing

Feel free to contribute to the project by submitting issues or pull requests. For any major changes or new features, please open an issue to discuss them first.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to adjust any specific details, such as URLs or configuration settings, according to your project's requirements.
