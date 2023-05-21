export const addTransaction = (transactions) => {
  return {
    type: "INIT_ADD_TRANSACTION",
    transaction: transactions,
  };
};

export const addIncome = (income) => {
  return {
    type: "INIT_ADD_INCOME",
    Income: income,
  };
};

export const addExpense = (expense) => {
  return {
    type: "INIT_ADD_EXPENSE",
    Expense: expense,
  };
};
export const deleteTransaction = (id) => {
  return {
    type: "INIT_DELETE_TRANSACTION",
    Id: id,
  };
};
export const subIncome = (income) => {
  return {
    type: "INIT_SUB_INCOME",
    Income: income,
  };
};
export const subExpense = (expense) => {
  return {
    type: "INIT_SUB_EXPENSE",
    Expense: expense,
  };
};
