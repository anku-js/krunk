import "./App.css";
import UserDetail from "./components/UserDetail/UserDetail";
import Messages from "./components/Messages/Messages";
import Product from "./components/Product/Product";
function App() {
  return (
    <div className="app">
      <div className="mobile-container">
        <UserDetail />
        <Messages />
        <Product />
      </div>
    </div>
  );
}

export default App;
