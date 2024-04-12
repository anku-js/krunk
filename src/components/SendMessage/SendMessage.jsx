import "./SendMessage.css";
import { GrAttachment } from "react-icons/gr";
import { FaChevronRight } from "react-icons/fa6";

export default function SendMessage() {
  return (
    <div className="send-message">
      <label className="message-label">
        <input
          type="text"
          className="message-input"
          placeholder="Type your message"
        />
        <GrAttachment className="attachment-icon" />
      </label>
      <button className="send-button">
        <FaChevronRight className="send-icon" />
      </button>
    </div>
  );
}
