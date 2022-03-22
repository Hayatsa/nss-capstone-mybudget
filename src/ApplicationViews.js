import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { BudgetList } from "./components/budget/BudgetList"




export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("budget_user", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("budget_user") !== null)
    }

    return (
        <>
            <Routes>
                <Route exact path="/budgets" element={<PrivateRoute> <BudgetList /> </PrivateRoute>} />
            </Routes>
        </>
    )    
}
