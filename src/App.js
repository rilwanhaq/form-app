import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './/components//home.js'
import View from './/components//view.js';
import Error from ".//components//error.js";
import Update from ".//components//update"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
export default App;