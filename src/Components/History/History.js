import React from "react";
import "./History.css";
import { connect } from "react-redux";
import {
  deleteTransaction,
  subIncome,
  subExpense,
} from "../../store/action/action";

function History(props) {
  const hanldeTransClick = (id, amount) => {
    props.onDeleteTransaction(id);
    if (amount.slice(0, 1) === "+") {
      props.onSubIncome(+amount.slice(1, amount.length));
    } else {
      props.onSubExpense(+amount.slice(1, amount.length));
    }
  };
  return (
    <div className="history">
      <p style={{ fontWeight: "bold" }}>History</p>
      <hr />
      <div className="history__transaction__wrapper">
        {props.transactions.map((tran, index) => {
          return (
            <div
              key={index}
              className="history__transaction"
              onClick={() => hanldeTransClick(tran.id, tran.amount)}
              style={{
                borderRight:
                  tran.amount.slice(0, 1) === "-"
                    ? "4px solid red"
                    : "4px solid green",
              }}
            >
              <p>{tran.text}</p>
              <p>{tran.amount}$</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteTransaction: (id) => dispatch(deleteTransaction(id)),
    onSubIncome: (income) => dispatch(subIncome(income)),
    onSubExpense: (expense) => dispatch(subExpense(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
