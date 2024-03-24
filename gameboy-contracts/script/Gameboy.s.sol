// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import "../src/Gameboy.sol";
import "../src/GameScores.sol";

contract GameboyScript is Script {
    function setUp() public {
    }

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("WALLET_PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        Gameboy gameboy = new Gameboy("DynamicBoy", "DBY");
        GameScores gamecore = new GameScores();

        console.log(gameboy.baseURI());
        vm.stopBroadcast();
    }
}
