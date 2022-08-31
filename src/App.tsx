import React, { useState } from "react";
import "./App.css";
import Page1 from "./components/onboarding/Page1";
import Page2 from "./components/onboarding/Page2";
import Page3 from "./components/onboarding/Page3";
import Page4 from "./components/onboarding/Page4";
import Pagination from "./components/Pagination";
import logo from "./images/cutshort-logo.jpg";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <img src={logo} alt="cutshort-logo" className="logo" />
      <Pagination page={page} />
      <div>
        {page === 1 && <Page1 setPage={setPage} />}
        {page === 2 && <Page2 setPage={setPage} />}
        {page === 3 && <Page3 setPage={setPage} />}
        {page === 4 && <Page4 />}
      </div>
    </div>
  );
}

export default App;
