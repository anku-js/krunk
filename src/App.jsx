import "./App.css";
import UserDetail from "./components/UserDetail/UserDetail";
import Messages from "./components/Messages/Messages";
function App() {
  return (
    <div className="app">
      <div className="mobile-container">
        <UserDetail />
        <Messages />
      </div>
    </div>
  );
}

export default App;
