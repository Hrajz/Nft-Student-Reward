// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RewardNFT is ERC721, Ownable {
    uint256 public tokenCounter;

    struct Achievement {
        string description;
        uint256 date;
    }

    mapping(uint256 => Achievement) public achievements;
    mapping(address => uint256[]) public studentTokens;

    constructor() ERC721("StudentAchievement", "ACHV") {
        tokenCounter = 0;
    }

    function awardNFT(address student, string memory description, uint256 date) public onlyOwner {
        uint256 tokenId = tokenCounter;
        _safeMint(student, tokenId);

        achievements[tokenId] = Achievement({
            description: description,
            date: date
        });

        studentTokens[student].push(tokenId);
        tokenCounter++;
    }

   function getAchievement(uint256 tokenId) public view returns (string memory , uint256 ) {
    require(_exists(tokenId), "Token does not exist");
    Achievement memory achievement = achievements[tokenId];
    return (achievement.description, achievement.date);
}


    function getAchievementsByAddress(address student) public view returns (uint256[] memory, Achievement[] memory) {
        uint256[] memory tokenIds = studentTokens[student];
        Achievement[] memory achievementsByStudent = new Achievement[](tokenIds.length);

        for (uint256 i = 0; i < tokenIds.length; i++) {
            uint256 tokenId = tokenIds[i];
            Achievement memory achievement = achievements[tokenId];
            achievementsByStudent[i] = achievement;
        }

        return (tokenIds, achievementsByStudent);
    }

    function burn(uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "Only the owner can burn their token");
        _burn(tokenId);

        // Remove the token from the student's list
        address student = msg.sender;
        uint256[] storage tokens = studentTokens[student];
        for (uint256 i = 0; i < tokens.length; i++) {
            if (tokens[i] == tokenId) {
                tokens[i] = tokens[tokens.length - 1];
                tokens.pop();
                break;
            }
        }
        delete achievements[tokenId];
    }
}
