import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('token-recepie')
  
  if(!user){
    return <Navigate to={'/signin'} />;
  }
  
  if(user){
    return <Navigate to={'/'} />;
  }
  
  return children;
};

export default ProtectedRoute;