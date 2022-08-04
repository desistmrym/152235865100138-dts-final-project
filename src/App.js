import Login from './component/Login';
import Landing from './content/Landing';
// import Navbar from './component/Navbar';
// import Footer from './component/Footer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Handle404 from './content/404';
import Recepie from './content/Recepie';
import Detail from './content/Detail';
import Create from './content/Create';
import Register from './component/Register';
import ProtectedRoute from './component/ProtectedRoute';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route 
          path="/signin" 
          element={
            <ProtectedRoute login={false}>
              <Login />
            </ProtectedRoute>
          }
        ></Route>
        <Route 
          path="/signup" 
          element={
            <ProtectedRoute login={false}>
              <Register />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/recepie" element={<Recepie />}></Route>
        <Route 
          path="/recepie-detail/:name" 
          element={
            <ProtectedRoute login={true}>
              <Detail />
            </ProtectedRoute>
          }
        ></Route>
        <Route 
          path="/create-recepie" 
          element={
            <ProtectedRoute login={true}>
              <Create />
            </ProtectedRoute>
          }
        ></Route>
        
        <Route path="*" element={<Handle404 />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
