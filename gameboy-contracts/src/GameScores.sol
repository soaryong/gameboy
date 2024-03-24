// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract GameScores {
    struct HighScore {
        uint score;
        address user;
    }

    mapping(string => mapping(address => uint)) private scores;
    
    mapping(string => HighScore) private highScores;

    function updateScore(string memory gameName, uint newScore) public {
        scores[gameName][msg.sender] = newScore;
        if (newScore > highScores[gameName].score) {
            highScores[gameName] = HighScore(newScore, msg.sender);
        }
    }

    function getUserScore(string memory gameName, address user) public view returns (uint) {
        return scores[gameName][user];
    }

    function getHighScore(string memory gameName) public view returns (uint, address) {
        HighScore memory highScore = highScores[gameName];
        return (highScore.score, highScore.user);
    }
}