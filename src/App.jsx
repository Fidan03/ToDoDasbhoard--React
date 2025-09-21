import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import Nav from './Layout/Nav';
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ViralTask from "./Pages/ViralTask/Index";
import MyTask from "./Pages/MyTask";
import Settings from "./Pages/Settings";
import Help from './Pages/Help/index';
import TaskPage from './Pages/TaskPage';
import Sidebar from './Layout/Sidebar';

function App() {

  return (
    <Router>
      <Routes>

      <Route path="/" element={<><Nav logo="Dashboard" />
      <div className='flex'>
        <div><Sidebar/></div>
        <div><Dashboard/></div>
      </div>
      </>}/>

      <Route path="/viraltask" element={<><Nav logo="ViralTask" />
      <div>
        <div><Sidebar/></div>
        <div><ViralTask /></div>
      </div>
      
      </>} />

      <Route path="/task/:id" element={<><Nav logo="TaskPage" />
      <div>
        <div><Sidebar/></div>
        <div><TaskPage /></div>
      </div>
      
      </>} />

      <Route path="/mytask" element={<><Nav logo="TaskPage" />
      <div>
        <div><Sidebar/></div>
        <div><MyTask /></div>
      </div>
      
      </>} />

      <Route path="/help" element={
      <div>
        <div><Sidebar/></div>
        <div><Help /></div>
      </div>
      } />

      <Route path="/settings" element={<div>
        <div><Sidebar/></div>
        <div><Settings /></div>
      </div>} />

      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<Login />} />
    </Routes>

    </Router>

  );
}

export default App;
