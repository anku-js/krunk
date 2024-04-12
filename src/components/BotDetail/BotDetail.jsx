import "./BotDetail.css";

export default function botDetail({chatBotInfo}) {

  const {botAvatar, isChatbotOnline, badge, botName, botType, statusText} = chatBotInfo;
  
  return (
    <div className="header">
      <div className="bot">
        <div className="bot-image">
          <img src={botAvatar} alt={botName} />
          <span className={`status-indicator avatar-indicator ${!isChatbotOnline ? "offline" : ""}`}></span>
        </div>
        <div className="bot-info-wrapper">
          <div className="bot-info">
            <p className="bot-name">{botName}</p>
            <img src={badge} alt="bot Badge" className="bot-badge" />
          </div>
          <p className="bot-type">{botType}</p>
        </div>
      </div>
      <div className= "status">
        <span className={`status-indicator ${!isChatbotOnline ? "offline" : ""}`}></span>{statusText}
      </div>
    </div>
  );
}
