import { Contract } from "ethers"
import { ethers } from "ethers"
import { ERC20_ABI } from "../abi/erc20"

const RPC = "https://alfajores-forno.celo-testnet.org"
export const TokenAddress = "0x874069fa1eb16d44d622f2e0ca25eea172369bc1"

const Provider = new  ethers.JsonRpcProvider(RPC)
const contract = new Contract(TokenAddress,ERC20_ABI,Provider)

export {Provider,contract}