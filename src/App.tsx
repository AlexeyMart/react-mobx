import "./App.css";
import { List } from "./components/List/List";
import { AddForm } from "./components/AddForm/AddForm";

function App() {
  return (
    <div className="App">
      <AddForm />
      <List />
    </div>
  );
}

export default App;
