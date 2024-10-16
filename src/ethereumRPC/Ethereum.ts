import { ethers } from "ethers";


class ETHREUM{
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
}