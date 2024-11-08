import axios from "axios";
import { Manager } from "./Manager";
import { cancelAll, createOrder } from "./order";

const solINR = new Manager("B-XAI_INR");

const usdtINR = new Manager("B-USDT_INR");

const solUSDT = new Manager("B-XAI_USDT");

// setInterval(() => {
//   console.log(solINR.getRelevantDepth());
//   console.log(usdtINR.getRelevantDepth());
//   console.log(solUSDT.getRelevantDepth());

//   const getinr = solINR.getRelevantDepth().lowestAsk - 0.001;
//   const usdtvalue = getinr / usdtINR.getRelevantDepth().lowestAsk;
//   const getsolfromusdt = usdtvalue / solUSDT.getRelevantDepth().lowestAsk;

//   console.log(`${1} SOL =  ${getsolfromusdt} SOL`);

//   const initialinr = solINR.getRelevantDepth().highestBid + 0.001;
//   const getusd = solUSDT.getRelevantDepth().highestBid;
//   const getinr2 = getusd * usdtINR.getRelevantDepth().highestBid;

//   console.log(` ${initialinr} INR to ${getinr2} INR`);
// }, 3000);

async function main(){
    const highestBid = solINR.getRelevantDepth().highestBid;
    await createOrder("buy", "XAIINR", (parseFloat(highestBid) + 0.01).toFixed(3), 10, Math.random().toString());
    await new Promise((r) => setTimeout(r, 4000));
    await cancelAll("XAIINR");
    main();
   
}
setInterval(async () => {
    main();
 }, 5000);