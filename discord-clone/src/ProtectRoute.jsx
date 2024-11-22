import React, { Children } from "react";
import { Navigate } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "./firebase";

const ProtectRoute = ({ children }) => {
    const [user] = useAuthState(auth);
    return user ? children : <Navigate to="/" />
};


export default ProtectRoute;