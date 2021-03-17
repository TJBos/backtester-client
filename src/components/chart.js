import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Chart = () => {
  return (
    <div className="chartbox">
      <TradingViewWidget
        symbol="BITFINEX:BTCUSD"
        interval="D"
        timezone="Etc/UTC"
        theme={Themes.DARK}
        style="1"
        locale="en"
        width="100%"
        height="400"
      />
    </div>
  );
};

export default Chart;
