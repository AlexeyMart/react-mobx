import "./App.css";
import { List } from "./components/List/List";
import { AddForm } from "./components/AddForm/AddForm";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <AddForm />
      <List />

      <Cart />
    </div>
  );
}

export default App;
