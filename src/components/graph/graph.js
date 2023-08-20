import user from "../../assets/icons/person.svg";
import "../../index.css";

const Graph = () => {
    return (
        <section className="graph-container" >
             <h1 className="graph-header">100,000 <img src={user} alt="user-icon"></img></h1>
             <span className="graph-line">Participants</span>
            <div className="graph">
                
            </div>
        </section>
    )
}

export default Graph;