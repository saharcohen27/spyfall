import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import SingleDevice from './components/SingleDevice/SingleDevice';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single" element={<SingleDevice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
