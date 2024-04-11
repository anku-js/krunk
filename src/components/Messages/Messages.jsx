import "./Messages.css";

export default function Messages() {
  return (
    <div className="messages-container">
      <div className="messages">
        <p className="user1-message">
          Hi Sam! I am your personal shopping assistant , how can i help you
          today ?
        </p>
        <p className="message-time">4:45 PM</p>
      </div>
      <div className="messages">
        <p className="user2-message">
          I am looking for a hand bag, with long strap .
        </p>
        <p className="message-time2">4:46 PM</p>
      </div>
    </div>
  );
}
