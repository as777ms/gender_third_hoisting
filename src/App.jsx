import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Chat from './components/Chat';
import Resources from './components/Resources';
import Forum from './components/Forum';
import EmergencyContact from './components/EmergencyContact';
import Navbar from './components/Navbar';
import EmergencyButton from './components/EmergencyButton';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <EmergencyButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/emergency" element={<EmergencyContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
