import Login from './component/Login';
import Landing from './content/Landing';
// import Navbar from './component/Navbar';
// import Footer from './component/Footer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Handle404 from './content/404';
import Recepie from './content/Recepie';
import Detail from './content/Detail';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="/recepie" element={<Recepie />}></Route>
        <Route path="/recepie-detail/:name" element={<Detail />}></Route>
        <Route path="*" element={<Handle404 />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
