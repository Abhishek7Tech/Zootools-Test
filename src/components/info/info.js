import InfoCards from "../info-cards/infoCards";
import LOCATION_DATA from "../../resources/location";
import LEADERBOARD_DATA from "../../resources/leaderboard";
import TRAFFIC_DATA from "../../resources/traffic";
import BEHAVIOUR_DATA from "../../resources/behavior";
import "../../index.css";

const Info = () => {
    console.log(BEHAVIOUR_DATA);
    return (
        <div className="info-card-container">
        
        {/* // LEADERBOARD */}
         <InfoCards className="info-card" data = {LEADERBOARD_DATA} />
         {/* //TRAFFIC// */}
         <InfoCards className="info-card" data={TRAFFIC_DATA} />
         {/* // SIGNUP_LOCATION */}
         <InfoCards className="info-card" data = {LOCATION_DATA} />
         {/* //BEHAVIOUR */}
         <InfoCards className="info-card" data={BEHAVIOUR_DATA} />
        </div>
    )
}

export default Info;