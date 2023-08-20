import CartelUp from "../../assets/icons/cartel-up.svg";
import CartelDown from "../../assets/icons/cartel-down.svg";
import LightBulb from "../../assets/icons/bulb.svg";

import "../../index.css";

const Insights = () => {
  return (
    <div className="insights-container">
      <div className="insights-zooTools">
        <h1 className="insights-heading">ZooTools insights</h1>
        <p className="insights-paragraph">
          Making analytics simple and actionalble
        </p>

        <h2 className="summary">Summary</h2>
        <ul className="summary-list">
          <li className="summary-list-item">
            <img
              src={CartelDown}
              alt="sign-down"
              className="summary-list-item-img cartel"
            ></img>
            <p className="summary-list-item-para">
              <strong>Signups are slowing down.</strong> -5% new than last week
            </p>
          </li>
          <li className="summary-list-item">
            <img
              className="summary-list-item-img cartel"
              src={CartelUp}
              alt="sign-up"
            ></img>
            <p className="summary-list-item-para">
              <strong>80%</strong> of your signups were invited by other
              members.
            </p>
          </li>
          <li className="summary-list-item">
            <img
              className="summary-list-item-img bulb"
              src={LightBulb}
              alt="light-bulb"
            ></img>
            <p className="summary-list-item-para">
              <strong>80%</strong> of your signups were invited by a friend.
            </p>
          </li>
          <li className="summary-list-item">
            <img
              className="summary-list-item-img bulb"
              src={LightBulb}
              alt="light-bulb"
            ></img>
            <p className="summary-list-item-para">
              <strong>80%</strong> of your signups were invited by a friend.
            </p>
          </li>
        </ul>
      </div>

      <div className="recommendation">
        <h2 className="recommendation-heading">Recommendation</h2>
        <p className="recommendation-line-1">
          {" "}
          <strong>Make sure to promote and share your form</strong>
        </p>
        <p className="recommendation-line-2">
          {" "}
          <strong>
            Congrats! This is huge. Keep giving rewards for to your users
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Insights;
