import React from 'react';

class Q7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockprices: [128, 97, 121, 123, 98, 97, 105] 
    }
  }
  bestProfit = (array) => {
    if(!array.length) {
      return 0;
    }
    let buy = array[0];
    let sell = array[0];
    let profit = 0;
    for (let i = 0; i < array.length; i++) {
      sell = array[i];
      if (sell < buy) buy = sell;
      if (sell - buy > profit) profit = sell - buy;
    }
    let tradeInfo = {profit: profit, sell: buy + profit, buy: buy}
    return tradeInfo;
  }

  render() {
    
    return(
      <div>
        <h3>Question 7: Max profit</h3>
        <div>
          The following array represents a company's stock price of the course of a week: <br />
          [128, 97, 121, 123, 98, 97, 105]
          <br />
          If you had to buy the shares in a particular day, and sell them on a subsequent day, write an algorithm and work out what the maximum profit you could make would be. <br /><br />
        </div>
        <div>The best results: <br />
        Buy @ {`$${this.bestProfit(this.state.stockprices).buy}`}
        <br />
        Sell @ {`$${this.bestProfit(this.state.stockprices).sell}`}
        <br />
        Total Profit - {`$${this.bestProfit(this.state.stockprices).profit}`}
        </div>
      </div>
    )
  }
}

export default Q7;