// import ETHEREUMRPC
import { ETHEREUMRPC } from "./src/ethereumRPC/ethersmethod";
import { Provider } from "./src/constants/constant";

(async()=>{
    const add :string ="0xEDE548D2fcEB23D27BfCa246995522D6e13Cbbc6"
    const TokenAddress = "0x765de816845861e75a25fca122bb6898b8b1282a"
    const ethereum = new ETHEREUMRPC(add,Provider)
    const bal = await  ethereum.getBalance()
    console.log("eth_getBalance",Number(bal))


})();