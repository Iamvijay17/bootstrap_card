import Main from "./components/Main";
import NavBarTop from "./components/NavBarTop";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
function App() {
  
  return (
    <div className="App">
      <NavBarTop />
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
