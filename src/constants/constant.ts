import { ethers } from "ethers"

const RPC = "https://alfajores-forno.celo-testnet.org"

const Provider = new  ethers.JsonRpcProvider(RPC)

export {Provider}