import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';
import DashboardAdmin from './pages/DashboardAdmin';
import Form from './pages/Form';
import StatisticsDetails from './pages/StatisticsDetails';
import StatisticsHistory from './pages/StatisticsHistory';
import TableTemplate from './pages/TableTemplate';
import VehiclesList from './pages/VehiclesList';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<F12Main />} exact />
        <Route path="/DashboardAdmin" element={<DashboardAdmin />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/StatisticsDetails" element={<StatisticsDetails />} />
        <Route path="/StatisticsHistory" element={<StatisticsHistory />} />
        <Route path="/TableTemplate" element={<TableTemplate />} />
        <Route path="/VehiclesList" element={<VehiclesList />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));