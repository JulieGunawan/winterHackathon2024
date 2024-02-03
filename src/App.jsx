import './App.css'
import SearchPage from './pages/SearchPage';
import {Routes, Route} from 'react-router-dom'

function App() {
  return(
    <Routes>
      <Route path="/Search" element={<SearchPage />} />
      <Route path="/Search/:id" element={<Profile />} />
    </Routes>
  );
}

export default App
