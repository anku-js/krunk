import "./UserDetail.css";

export default function UserDetail() {
  return (
    <div className="header">
      <div className="user">
        <div className="user-image">
          <img src="user1.png" alt="user image" />
          <span className="ellipse1"></span>
        </div>
        <div className="info">
          <div className="user-name-wrapper">
            <p className="user-name">Timpu</p>
            <img src="Vector.png" alt="user is verified" className="vector" />
          </div>
          <p className="user-description">Chat assistant</p>
        </div>
      </div>
      <div className="activity">
        <span className="ellipse2"></span>Online
      </div>
    </div>
  );
}
