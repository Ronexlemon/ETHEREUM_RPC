import { ethers } from "ethers";
import { transferEventSignature } from "../utils/filter"; // Assuming this is defined elsewhere
import { contract } from "../constants/constant"; // Assuming this is defined elsewhere

export const TokenAddress = "0x765de816845861e75a25fca122bb6898b8b1282a";

const filter = {
    address: TokenAddress,
    topics: [transferEventSignature],
};

class ETHEREUMRPC {
    Address: string;
    Provider: ethers.Provider;

    constructor(address: string, provider: ethers.Provider) {
        this.Address = address;
        this.Provider = provider;
    }

    getBalance = async (): Promise<bigint> => {
        const bal = await this.Provider.getBalance(this.Address);
        return bal;
    };

    getUserTokenHistory = async () => {
        const currentBlock = await this.Provider.getBlockNumber();
        console.log("curret",currentBlock)

        // Query transfer events where the user was either the sender or receiver
        const filterFrom = contract.filters.Transfer(this.Address, null); // Where the user is the sender
        const filterTo = contract.filters.Transfer(null, this.Address);   // Where the user is the receiver
        

        // Get past events (you can limit the block range or paginate if needed)
        const transferFromEvents = await contract.queryFilter(filterFrom, 0, currentBlock);
        const transferToEvents = await contract.queryFilter(filterTo, 0, currentBlock);
        
        
        
        // Combine both sets of events
        const allTransfers = [...transferFromEvents, ...transferToEvents].sort((a, b) => a.blockNumber - b.blockNumber);

       
        return allTransfers.slice(0,20);
    };
    getBlockNumber = async():Promise<number>=>{
        const blockNumber = await this.Provider.getBlockNumber()
        return blockNumber
    }
}

export { ETHEREUMRPC };
