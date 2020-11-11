import React from "react";
import { connect } from "react-redux";
import { buyChoco } from "../redux/chocolate/chocoAction";

const ChocoContainer = ({ numOfChoco, buyChoco }) => {
  return (
    <div>
      <h1>Chocolates in stock {numOfChoco}</h1>
      <button onClick={buyChoco}>Buy Chocolotes</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfChoco: state.choco.numOfChoco,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyChoco: () => dispatch(buyChoco()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChocoContainer);
