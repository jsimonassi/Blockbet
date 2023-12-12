import Web3 from "web3";
import { IInputBox__factory } from "@cartesi/rollups/";


const VITE_LOCALHOST_DAPP_ADDRESS = "0x70ac08179605AF2D9e75782b8DEcDD3c22aA4D0C"; //TODO: Replace pela nossa
const VITE_LOCALHOST_INPUTBOX_ADDRESS = "0x59b22D57D4f067708AB0c00552767405926dc768"; //TODO: Replace pela nossa

export async function send() {
  const localStorareUser = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";

  try {
    const web3 = new Web3((window as any).ethereum);
    const inputContract = new web3.eth.Contract(
        IInputBox__factory.abi,
      VITE_LOCALHOST_INPUTBOX_ADDRESS
    );
    const input = {
      function_id: 1,
      needToNotice: true,
      car_id_1: "sablau",
      user_id_1: localStorareUser,
      created_at: new Date(),
    };
    const inputString = JSON.stringify(input);
    const inputHex = web3.utils.utf8ToHex(inputString);
    try {
      await inputContract.methods
        .addInput(VITE_LOCALHOST_DAPP_ADDRESS as string, inputHex)
        .send({ from: localStorareUser });
        return true;
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.error("Error occurred while sending input:", error);
  }
}
