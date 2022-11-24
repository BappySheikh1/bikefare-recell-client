import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../../milestone12/doctors-portal-client/src/Contexts/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <div className='text-center my-20'>
            <button className="btn btn-square loading"></button>
        </div>
    }

    if(!user){
     return <Navigate to='/login' ></Navigate>
    }
    return children
};

export default PrivateRouter;