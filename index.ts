// import ETHEREUMRPC
import { ETHEREUMRPC } from "./src/ethereumRPC/ethersmethod";
import { Provider } from "./src/constants/constant";

(async()=>{
    const add :string ="0x65E28C9C4Ef1a756d8df1c507b7A84eFcF606fd4"
   
    const ethereum = new ETHEREUMRPC(add,Provider)
    const bal = await  ethereum.getBalance()
    console.log("eth_getBalance",Number(bal))
    const history = await ethereum.getUserTokenHistory()
    console.log("eth_getUserTokenHistory",history)


})();