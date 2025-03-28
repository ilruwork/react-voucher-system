import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import './style.css';

export default function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="content">
        <Dashboard />
      </div>
    </div>
  );
}
