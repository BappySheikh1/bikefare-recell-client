import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../../milestone12/doctors-portal-client/src/Contexts/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user}=useContext(AuthContext)
    if(!user){
     return <Navigate to='/login' ></Navigate>
    }
    return children
};

export default PrivateRouter;