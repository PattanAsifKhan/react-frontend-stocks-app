import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Header from "../Header/Header";
import Card from "../Card/Card";
import "./Stocks.scss";
import axios from "axios";

const Stocks = () => {
  const [StockData, setStockData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=e4a7e41f77524879cbe6b69b63f63c73&ids=BTC,ETH,XRP,LTC,DOT&interval=1d,30d&convert=USD&per-page=100&page=1`
      )
      .then((response) => response)
      .then((data) => setStockData(filterData(data.data)));
  }, []);

  const filterData = (data) => {
    const needValues = data.map((item) => {
      return {
        name: item.name,
        symbol: item.symbol,
        price: item.price,
        high: item.high,
      };
    });
    return needValues;
  };
  return (
    <div>
      <Header />
      <h3 style={{ textAlign: "center" }}>Top 5 Crypto Stocks</h3>
      <Box className="boxStyle">
        {StockData.map((item) => {
          return (
            <Card
              name={item.name}
              symbol={item.symbol}
              price={item.price}
              high={item.high}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default Stocks;
