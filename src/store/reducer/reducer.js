const initialState = {
  transactions: [],
  income: 0,
  expense: 0,
};

const addTransaction = (state, action) => {
  return {
    ...state,
    transactions: [...state.transactions, action.transaction],
  };
};

const addIncome = (state, action) => {
  return {
    ...state,
    income: state.income + action.Income,
  };
};

const addExpense = (state, action) => {
  return {
    ...state,
    expense: state.expense + action.Expense,
  };
};

const deleteTransaction = (state, action) => {
  return {
    ...state,
    transactions: state.transactions.filter((trans) => trans.id !== action.Id),
  };
};

const subIncome = (state, action) => {
  return {
    ...state,
    income: state.income - action.Income,
  };
};

const subExpense = (state, action) => {
  return {
    ...state,
    expense: state.expense - action.Expense,
  };
};
const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_ADD_TRANSACTION":
      return addTransaction(state, action);
    case "INIT_ADD_INCOME":
      return addIncome(state, action);
    case "INIT_ADD_EXPENSE":
      return addExpense(state, action);
    case "INIT_DELETE_TRANSACTION":
      return deleteTransaction(state, action);
    case "INIT_SUB_INCOME":
      return subIncome(state, action);
    case "INIT_SUB_EXPENSE":
      return subExpense(state, action);
    default:
      return state;
  }
};
export default expenseReducer;
