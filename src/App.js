import Graph from "./components/graph/graph";
import Header from "./components/header/header";
import Info from "./components/info/info";
import Insights from "./components/insights/insights";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Graph />
      <Insights />
      <Info />
    </div>
  );
}

export default App;
