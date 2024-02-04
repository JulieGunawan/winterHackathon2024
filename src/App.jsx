import './App.css'
import SearchPage from './pages/SearchPage';
import {Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile';

function App() {
  return(
    <Routes>
      <Route path="/Search" element={<SearchPage />} />
      <Route path="/drivers/:id" element={<Profile />} />
    </Routes>
  );
}

export default App
