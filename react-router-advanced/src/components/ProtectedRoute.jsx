import React from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoute ({ children, useAuth }) {
    return useAuth ? children : <navigator to="/login" />;
}
export default ProtectedRoute;