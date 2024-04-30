import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Audience from './Dashboard/Audience';
import Vehicles from './Dashboard/Vehicles';
import Form from './Dashboard/Form';


function App() {
  const [sidebarState, setSidebarState] = useState(true);
 
  // Listening for window resize and reset sidebar state
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 950){
        setSidebarState(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Audience sidebarState={sidebarState} setSidebarState={setSidebarState}/>} />  {/* Temp */}
        <Route path="/audience" element={<Audience sidebarState={sidebarState} setSidebarState={setSidebarState} />} />
        <Route path="/vehicles" element={<Vehicles sidebarState={sidebarState} setSidebarState={setSidebarState} />} />
        <Route path="/form" element={<Form sidebarState={sidebarState} setSidebarState={setSidebarState} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
