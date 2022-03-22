import React, {useState} from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "../ApplicationViews"
import "./myBudget.css"

export const Budget = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("budget_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("budget_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("budget_user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("budget_user") !== null)
      }

    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
            <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        </>
    )
}