// import ETHEREUMRPC
import { ETHEREUMRPC } from "./src/ethereumRPC/ethersmethod";
import { Provider } from "./src/constants/constant";

(async()=>{
    const add :string ="0x65E28C9C4Ef1a756d8df1c507b7A84eFcF606fd4"
    const hash:`0x${string}` = "0x357885eed5a87ef53212d2540f68c5eca320c9c15576a0842d60d8c19d13be7a"
   
    const ethereum = new ETHEREUMRPC(add,Provider)
    const bal = await  ethereum.getBalance()
    console.log("eth_getBalance",Number(bal))
    const history = await ethereum.getUserTokenHistory()
    console.log("eth_getUserTokenHistory",history)
    const blockNumber = await ethereum.getBlockNumber();
    console.log("eth_getBlockNumber",blockNumber)
    const blockByNumber = await ethereum.getBlockByNumber()
    console.log("eth_getBlockByNumber",blockByNumber)
    const getBlockByHash = await ethereum.getBlockByHash(hash)
    console.log("eth_getBlockByHash",getBlockByHash)
    const getTransationByHash = await ethereum.getTransactionByHash(hash)
    console.log("eth_getTransactionByHash",getTransationByHash)
    const getTransactionReceipt = await ethereum.getTransactionReceipts(hash)
    console.log("eth_getTransactionReceipt",getTransactionReceipt)


})();