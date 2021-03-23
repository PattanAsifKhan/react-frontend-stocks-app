import React from "react";
import * as Mui from "@material-ui/core";
import "./Card.scss";

const Card = (props) => {
  const { name, price, high, symbol } = props;
  return (
    <>
      <Mui.Card className="cardSize">
        <Mui.CardContent className="card-content">
          <Mui.Typography className="textAlignTitle">{name}</Mui.Typography>
          <Mui.Typography className="card-content-text" component="p">
            Current Price:{price}
          </Mui.Typography>
          <Mui.Typography className="card-content-text" component="p">
            Highest Price:{high}
          </Mui.Typography>
          <Mui.Typography className="card-content-text" component="p">
            Symbol:{"       "}
            {symbol}
          </Mui.Typography>
        </Mui.CardContent>
      </Mui.Card>
    </>
  );
};

export default Card;
