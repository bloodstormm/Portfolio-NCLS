import { RoutesContainer } from "./components/RoutesContainer";
import { BrowserRouter as Router } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <div className="mx-auto w-full text-brown">
      <Router>
        <RoutesContainer />
        <SpeedInsights />
      </Router>
    </div>
  );
}

export default App;
