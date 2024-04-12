import "./App.css";
import BotDetail from "./components/BotDetail/BotDetail";
import ChatMessages from "./components/ChatMessages/ChatMessages";
import ProductWidget from "./components/ProductWidget/ProductWidget";
import SendMessage from "./components/SendMessage/SendMessage";
import Footer from "./components/Footer/Footer";
import { chatBotInfo, chatMessages } from "./db";
import { productInfo } from "./db";

function App() {
  return (
    <div className="app">
      <div className="mobile-container">
        <BotDetail chatBotInfo={chatBotInfo} />
        <ChatMessages chatMessages={chatMessages} />
        <ProductWidget productInfo={productInfo} />
        <div className="footer">
          <SendMessage />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
