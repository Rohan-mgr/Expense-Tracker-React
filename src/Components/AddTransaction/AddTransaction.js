import React, { useState } from "react";
import "./AddTransaction.css";
import { connect } from "react-redux";
import {
  addTransaction,
  addIncome,
  addExpense,
} from "../../store/action/action";

function AddTransaction(props) {
  const [isValid, setIsValid] = useState(true);

  function handleChange(e) {
    let regex = /^([+-]{1,1})[0-9]{1,}$/g;
    if (regex.test(e.target.value)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }
  function handleAddTransaction(e) {
    e.preventDefault();
    const Text = document.getElementById("text");
    const Amount = document.getElementById("amount");
    props.onAddTransacton({
      id: Math.floor(Math.random() * 1000),
      text: Text.value,
      amount: Amount.value,
    });
    if (Amount.value.slice(0, 1) === "+") {
      props.onAddIncome(+Amount.value.slice(1, Amount.value.length));
    } else {
      props.onAddExpense(+Amount.value.slice(1, Amount.value.length));
    }
    Text.value = "";
    Amount.value = "";
    setIsValid(true);
    Text.focus();
  }
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Add new transaction</p>
      <hr />
      <form onSubmit={handleAddTransaction}>
        <label>Text</label>
        <input
          id="text"
          type="text"
          placeholder="Enter text..."
          autoComplete="off"
          required
        />
        <label>Amount(negative-expense, positive-income)</label>
        <input
          id="amount"
          type="text"
          placeholder="Enter amount..."
          autoComplete="off"
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isValid}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddTransacton: (transaction) => dispatch(addTransaction(transaction)),
    onAddIncome: (income) => dispatch(addIncome(income)),
    onAddExpense: (expense) => dispatch(addExpense(expense)),
  };
};
export default connect(null, mapDispatchToProps)(AddTransaction);
