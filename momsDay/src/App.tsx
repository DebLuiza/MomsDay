import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header'
import Rosangela from './pages/Rosangela/Rosangela';
import Jessica from './pages/Jessica/Jessica';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/rosangela" />} />
        <Route path="/rosangela" element={<Rosangela />} />
        <Route path="/jessica" element={<Jessica />} />
      </Routes>
    </>
  );
}

export default App;