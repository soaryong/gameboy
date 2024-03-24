//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Gameboy is ERC721, ERC2981, ERC721URIStorage, AccessControl, Ownable {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    string public baseURI = "";
    constructor(string memory name, string memory symbol) ERC721(name, symbol) Ownable(msg.sender) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return string.concat(baseURI, Strings.toString(tokenId));
    }

    function setURI (string memory uri) public onlyRole(DEFAULT_ADMIN_ROLE) {
        baseURI = uri;
    }

    function mint(address to, uint tokenId) public onlyRole(MINTER_ROLE) {
        _safeMint(to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC2981, ERC721URIStorage, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    receive() external payable { }
    fallback() external payable { }
}