import "../../index.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="heading">Summer referral competetion</h1>
        <ul className="days-list">
          <li className="days-list-item">
            <button className="list-button">1h</button>
          </li>
          <li className="days-list-item">
            <button className="list-button">24h</button>
          </li >
          <li className="days-list-item">
            <button className="list-button-active">30d</button>
          </li>
          <li className="days-list-item">
            <button className="list-button">60d</button>
          </li>
        </ul>
    </div>
  );
};

export default Header;
