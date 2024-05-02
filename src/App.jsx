import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Header from './Header';
import {Stolb, Stolb2} from './Stolb';
import { TrafficLightsProvider } from './TrafficLightsProvider';
import TrafficLightController from './TrafficLightController';

function App() {
  return (
    <TrafficLightsProvider>
      <TrafficLightController />
      <Router>
        <div className="App">
          <Header />
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/horizontal" element={<Stolb/>} />
            <Route path="/vertical" element={<Stolb2/>} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </TrafficLightsProvider>
  );
}

export default App;
