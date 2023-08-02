import './App.css';
import Create from "./components/create";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Read from './components/read';
import Update from './components/update';

function App() {
  return (
    <div className='main'>
      <h2 className='main-header'>React Crud Operations</h2>
      <div>
        <Router>
          <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          </Routes>
        </Router>
      </div>
    </div>

  );
}

export default App;
