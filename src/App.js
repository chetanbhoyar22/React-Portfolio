import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PageLoader from "./components/common/PageLoader";
import Home from "./pages/Home";

function App() {
  return (
    <PageLoader>
      <Router>
        <Home />
      </Router>
    </PageLoader>
  );
}

export default App;
