import "./App.css";
import Header from "./Components/Header/Header";
import History from "./Components/History/History";
import AddTransaction from "./Components/AddTransaction/AddTransaction";

function App() {
  return (
    <div className="App">
      <h3>Expense Tracker</h3>
      <Header />
      <History />
      <AddTransaction />
    </div>
  );
}

export default App;
