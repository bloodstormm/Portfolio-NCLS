import { RoutesContainer } from "./components/RoutesContainer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="mx-auto w-full text-brown">
      <Router>
        <RoutesContainer />
      </Router>
    </div>
  );
}

export default App;
