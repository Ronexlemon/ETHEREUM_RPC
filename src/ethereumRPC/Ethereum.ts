import { ethers } from "ethers";


class ETHEREUM{
    Provider : ethers.JsonRpcProvider
    address : string
    constructor(address:string,provider:ethers.JsonRpcProvider){
        this.address = address
        this.Provider = provider
    }

    getChainId= async():Promise<number>=>{
        let chainId = await this.Provider.send("eth_chainId",[])
        return chainId
    }
    getBlockNumber = async():Promise<number>=>{
        let blockNumber = await this.Provider.send("eth_blockNumber",[])
        return blockNumber
    }
    getGasPrice = async():Promise<number>=>{
        let gasPrice = await this.Provider.send("eth_gasPrice",[])
        return gasPrice
    }
    getMaxPriorityFeePerGas = async():Promise<number>=>{
        let maxPriorityFeePerGas = await this.Provider.send("eth_maxPriorityFeePerGas",[])
        return maxPriorityFeePerGas
    }
}

export {ETHEREUM}