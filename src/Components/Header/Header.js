import React from "react";
import "./Header.css";
import { connect } from "react-redux";

function Header(props) {
  function checkIncome(TotalIncome) {
    if (TotalIncome > 0) {
      return <span style={{ color: "green" }}>{TotalIncome}$</span>;
    } else if (TotalIncome < 0) {
      return <span style={{ color: "red" }}>{TotalIncome}$</span>;
    } else {
      return <span>{TotalIncome}$</span>;
    }
  }
  return (
    <div className="header">
      <div className="your__balance">
        <span>YOUR BALANCE</span>
        <h2>{checkIncome(props.Income - props.Expense)}</h2>
      </div>
      <div className="income__expense__wrapper">
        <div className="income__div">
          <p style={{ textAlign: "center" }}>INCOME</p>
          <p style={{ color: "green", fontSize: "1.3rem" }}>{props.Income}$</p>
        </div>

        <div className="expense__div">
          <p style={{ textAlign: "center" }}>Expense</p>
          <p style={{ color: "red", fontSize: "1.3rem" }}>{props.Expense}$</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Income: state.income,
    Expense: state.expense,
  };
};

export default connect(mapStateToProps)(Header);
