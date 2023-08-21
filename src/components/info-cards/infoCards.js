import "../../index.css";

import us from "../../assets/icons/united-states.png";
import nl from "../../assets/icons/netherlands.png";
import jp from "../../assets/icons/japan.png";
import ind from "../../assets/icons/india.png";
import de from "../../assets/icons/germany.png";
import earth from "../../assets/icons/earth.png";

const flagsArray = [us, de, nl, ind, jp, earth];

const InfoCards = (props) => {
  const headerInfo = props.data[0];
  const listInfo = props.data[1].data;

  const splitMe = "30,000";
  console.log("Split", +splitMe.split(",")[0]);

  return (
    <div className="info-container">
      <div className="info-header-section">
        <h1 className="info-header">{headerInfo.headerName}</h1>
        <div className="info-header-button-section">
          {headerInfo.button1 && (
            <button className="info-header-button button-1">
              {headerInfo?.button1}
            </button>
          )}
          {headerInfo.button2 && (
            <button className="info-header-button button-2">
              {headerInfo?.button2}
            </button>
          )}
        </div>
      </div>

      {/* SIGNUP LOCATION LIST */}
      {headerInfo.headerName === "Signup location" && (
        <ul className="data-list">
          {listInfo.map((data, idx) => {
            return (
              <li key={data.id} className="data-list-item">
                <dl
                  className="location-countries"
                  style={{
                    backgroundColor: "yellow",
                    width: 2 + +data.signups.split(",")[0] * 4,
                  }}
                >
                  {data.flag && (
                    <img
                      src={flagsArray[data.id - 1]}
                      className="data-list-item-img"
                      alt={data.name + "country-flag"}
                    ></img>
                  )}
                  <span className="data-list-item-name">{data.name}</span>
                </dl>
                <dl>
                  <span className="data-list-item-info">{data.signups}</span>
                </dl>
              </li>
            );
          })}
        </ul>
      )}

      {/* LEADERBOARD LIST */}

      {headerInfo.headerName === "User leaderboard" && (
        <table className="user-table">
          <thead>
            <tr className="user-row">
              <th className="user-heading heading-email">Email</th>
              <th className="user-heading heading-invited">Friends invited</th>
              <th className="user-heading heading-country">Country</th>
            </tr>
          </thead>
          <tbody>
            {listInfo.map((data) => {
              return (
                <tr key={data.id} className="user-row">
                  <td className="user-data user-email">{data.email}</td>
                  <td className="user-data user-invited">{data.invited}</td>
                  <td className="user-data user-country">{data.country}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {/* //TRAFFIC LIST// */}
      {headerInfo.headerName === "Traffic" && (
        <ul className="data-list">
          {listInfo.map((data, idx) => {
            return (
              <li key={data.id} className="data-list-item">
                <dl
                  className="location-countries"
                  style={{
                    backgroundColor: "yellow",
                    width: 2 + +data.signups.split(",")[0] * 4,
                  }}
                >
                  <span className="data-list-item-name">
                    {data.social_name}
                  </span>
                </dl>
                <dl>
                  <span className="data-list-item-info">{data.signups}</span>
                </dl>
              </li>
            );
          })}
        </ul>
      )}

      {/* // BEHAVIOUR LIST */}

      {headerInfo.headerName === "Behaviour" && (
        <ul className="data-list">
          {listInfo.map((data, idx) => {
            return (
              <li key={data.id} className="data-list-item">
                <dl
                  className="location-countries"
                  style={{
                    backgroundColor: "yellow",
                    width: 2 + +data.signups.split(",")[0] * 4,
                  }}
                >
                  <span className="data-list-item-name">{data.country}</span>
                </dl>
                <dl>
                  <span className="data-list-item-info">{data.signups}</span>
                </dl>
              </li>
            );
          })}
        </ul>
      )}

      <button className="see-button">See {headerInfo.seeAllButton}</button>
    </div>
  );
};

export default InfoCards;
