import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Home from "pages/Home";
import Sign from "./pages/SignIn/SignIn";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import "./assets/scss/main.scss";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Sign />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
