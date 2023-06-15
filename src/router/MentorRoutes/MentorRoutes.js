import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useMentor from '../../hooks/useMentorSecurity';

const SellerRoutes = ({children}) => {
    const { user , loading} = useContext(AuthContext);
    const [isSeller , isSellerLoading] = useMentor(user?.email);
    const location = useLocation();
    if(loading || isSellerLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isSeller) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;

};

export default SellerRoutes;