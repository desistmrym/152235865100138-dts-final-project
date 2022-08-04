import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ login, children }) => {
  const user = localStorage.getItem('token-recepie')
  
  if(!user && login){
    return <Navigate to={'/signin'} />;
  }
  
  if(user && !login){
    return <Navigate to={'/'} />;
  }
  
  return children;
};

export default ProtectedRoute;