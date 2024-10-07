// get balance

import { ethers } from "ethers"


class ETHEREUMRPC{
     Address:string
     Provider: ethers.Provider
    constructor(address: string,provider:ethers.Provider){
        this.Address = address
        this.Provider = provider
        
    }

    getBalance =async():Promise<bigint>=>{
        const bal = await this.Provider.getBalance(this.Address)

        return bal
    }
}

export {ETHEREUMRPC}