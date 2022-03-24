import React from "react";
import "./index.css";
function Counter(props) {
    let num = 0;
    let count2 = 0;
    let count3 =0;
    let count4 =0;
    function increment() {
      num += 28;
      count2 += 20;
      count3 += 27;
      count4 += 15;
      let totalCounter= document.getElementsByClassName("counter");
      for(let i = 0; i<totalCounter.length; i++){
          totalCounter[0].innerHTML = num;
          totalCounter[1].innerHTML = count2;
          totalCounter[2].innerHTML = count3;
          totalCounter[3].innerHTML = count4;
      }
      num++;
      count2++;
      count3++;
      count4++;
      if (num >= 1100) {
        clearInterval(timer);
      }
    }
    let timer = setInterval(increment, 50);
    return (
      <div className="text-white">
        <p className="text-white font-bold lg:text-6xl text-4xl counter ml-10 lg:ml-3"></p>
        <hr className="ml-10 w-16 lg:my-5 my-3 flex items-center justify-center" />
        <p className="text-2xl tracking-wider">{props.type}</p>
      </div>
    );
}
export default Counter;