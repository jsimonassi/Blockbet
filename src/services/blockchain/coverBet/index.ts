import Web3 from "web3";
import { InputBox__factory } from "@cartesi/rollups/";
import { Bet } from "../../../types/Bet";
import { AvailableFunctions } from "../../../constants/availableFunctions";
import { JsonRpcProvider } from "@ethersproject/providers";
import { ethers } from "ethers";

const HARDHAT_DEFAULT_MNEMONIC =
    "test test test test test test test test test test test junk";
export const coverBet = async (bet: Bet): Promise<void> => {
    try {
        const web3 = new Web3((window as any).ethereum);
        const inputString = JSON.stringify({
            function_id: AvailableFunctions.COVER_BET,
            ...bet
        });
        const inputHex = web3.utils.utf8ToHex(inputString);

        // Start a connection
        const provider = new JsonRpcProvider((window as any).env.HARDHAT_LOCALHOST_RPC_URL);
        const signer = ethers.Wallet.fromMnemonic(
            HARDHAT_DEFAULT_MNEMONIC,
            "m/44'/60'/0'/0/0"
        ).connect(provider);

        // Instantiate the InputBox contract
        const inputBox = InputBox__factory.connect(
            (window as any).env.LOCALHOST_INPUTBOX_ADDRESS,
            signer
        );

        // Send the transaction
        const tx = await inputBox.addInput((window as any).env.LOCALHOST_DAPP_ADDRESS, inputHex);
        console.log(`transaction: ${tx.hash}`);

        // Wait for confirmation
        console.log("waiting for confirmation...");
        const receipt = await tx.wait(1);

        // Search for the InputAdded event
        const event = receipt.events?.find((e) => e.event === "InputAdded");
        console.log("Receipt: ", receipt, event);

        return Promise.resolve();
    } catch (error) {
        console.error("Error occurred while sending input:", error);
        return Promise.reject(error);
    }
};