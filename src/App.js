import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from './screens/HomePage';

// Styling
import './styles/styles.css';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;