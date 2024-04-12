import "./ChatMessages.css";

export default function Messages({ chatMessages }) {
  return (
    <div className="messages-container">
      {chatMessages?.map( ({ id, messageFrom, message, messageSentAt }) => (
        <div className="message-info" key={id}>
          <p className={`message ${messageFrom === "bot" ? "bot-message" : "user-message" }`}>{message}</p>
          <p className={`message-time ${messageFrom === "bot" ? "message-time-bot" : "message-time-user "}`}>{messageSentAt}</p>
        </div>
      ))}
    </div>
  );
}
