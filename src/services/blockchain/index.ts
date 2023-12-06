import { InputBox__factory } from "@cartesi/rollups";
import { ethers } from "ethers";
import { JsonRpcProvider } from "@ethersproject/providers";
const HARDHAT_LOCALHOST_RPC_URL = "http://localhost:8545";
const HARDHAT_DEFAULT_MNEMONIC = "test test test test test test test test test test test junk";
const accountIndex = 0;
const INPUTBOX_ADDRESS = "0x59b22D57D4f067708AB0c00552767405926dc768";
const DAPP_ADDRESS = "0x70ac08179605AF2D9e75782b8DEcDD3c22aA4D0C";


export const send = async () => {
    const value = "Hello World!";
       
        // Start a connection
        const provider = new JsonRpcProvider(HARDHAT_LOCALHOST_RPC_URL);
        const signer = ethers.Wallet.fromMnemonic(
            HARDHAT_DEFAULT_MNEMONIC,
            `m/44'/60'/0'/0/${accountIndex}`
        ).connect(provider);

        // Instantiate the InputBox contract
        const inputBox = InputBox__factory.connect(
            INPUTBOX_ADDRESS,
            signer
        );

        // Encode the input
        const inputBytes = ethers.utils.isBytesLike(value) ? value : ethers.utils.toUtf8Bytes(value);

        // Send the transaction
        const tx = await inputBox.addInput(DAPP_ADDRESS, inputBytes);
        console.log(`transaction: ${tx}`);

        // Wait for confirmation
        console.log("waiting for confirmation...");
        const receipt = await tx.wait(1);

        // Search for the InputAdded event
        const event = receipt.events?.find((e) => e.event === "InputAdded");

        // toast({
        //     title: "Transaction Confirmed",
        //     description: `Input added => index: ${event?.args.inputIndex} `,
        //     status: "success",
        //     duration: 9000,
        //     isClosable: true,
        //     position: "top-left",
        // });
        console.log(`Input added => index: ${event?.args?.inputIndex} `);
};