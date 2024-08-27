
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

### Contributing

Feel free to contribute to the project by submitting issues or pull requests. For any major changes or new features, please open an issue to discuss them first.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to adjust any specific details, such as URLs or configuration settings, according to your project's requirements.
