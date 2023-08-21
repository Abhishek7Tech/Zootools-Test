import user from "../../assets/icons/person.svg";
import "../../index.css";
import SignUpChart from "../bargraph/bargraph";



const Graph = () => {
    
    return (
        <section className="graph-container" >
             <h1 className="graph-header">100,000<img className="user-icon" src={user} alt="user-icon"></img></h1>
             <span className="graph-line">Participants</span>
            <div className="graph">
                <SignUpChart />            
            </div>
        </section>
    )
}

export default Graph;