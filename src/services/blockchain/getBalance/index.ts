import { AvailableFunctions } from "../../../constants/availableFunctions";
import axios from "axios";
import Web3 from "web3";

export const getBalance = async (address: string): Promise<number> => {
    try {
        const payload = {
            function_id: AvailableFunctions.GET_BALANCE,
            user_id: address,
        };
        const stringToEncode = JSON.stringify(payload);
        const url = `http://localhost:8080/inspect/${stringToEncode}`;
        const config = {
            url: url,
            headers: {
                Accept: "application/json",
            },
        };

        const response = await axios.get(config.url);
        const parsedData = response.data.reports[0].payload;
        const regularString = Web3.utils.hexToAscii(parsedData);
        const arrayOfString = regularString.split("\n");
        const arrayOfObjects =
            arrayOfString && arrayOfString[0].length > 0
                ? arrayOfString.map((string) => {
                    const stringModified = string
                        .replace(/None/g, "null")
                        .replace(/'/g, "\"")
                        .replace(/\\'/g, "")
                        .replace(/False/g, "false")
                        .replace(/[\u0080-\uFFFF]/g, function (match) {
                            return "" + ("" + match.charCodeAt(0).toString(16)).slice(-4);
                        });

                    return JSON.parse(stringModified);
                })
                : [];

        return Promise.resolve(arrayOfObjects[0].balance);
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
};
