import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './/components//home.js'
import View from './/components//view.js';
import Error from ".//components//error.js";


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
export default App;