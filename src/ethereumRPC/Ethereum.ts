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
        return Number(BigInt(chainId))
    }
    getBlockNumber = async():Promise<number>=>{
        let blockNumber = await this.Provider.send("eth_blockNumber",[])
        return Number(BigInt(blockNumber))
    }
    getGasPrice = async():Promise<number>=>{
        let gasPrice = await this.Provider.send("eth_gasPrice",[])
        return Number(BigInt(gasPrice))
    }
    getMaxPriorityFeePerGas = async():Promise<number>=>{
        let maxPriorityFeePerGas = await this.Provider.send("eth_maxPriorityFeePerGas",[])
        return Number(BigInt(maxPriorityFeePerGas))
    }
    getBlobBaseFee = async():Promise<number>=>{
        let blobBaseFee = await this.Provider.send("eth_eth_blobBaseFee",[])
        return Number(BigInt(blobBaseFee))
    }
    getFeeHistory = async():Promise<any>=>{
        let feeHistory = await this.Provider.send("eth_feeHistory",["0x1",'latest',[]])
        return (feeHistory)
    }
    getBalance = async():Promise<number>=>{
        let balance = await this.Provider.send("eth_getBalance",[this.address,'latest'])
        return Number(BigInt(balance))

    }
    getCode = async():Promise<`0x${string}`>=>{
        let code = await this.Provider.send("eth_getCode",[this.address,'latest'])
        return `0x${code}`
    }

}
   

export {ETHEREUM}