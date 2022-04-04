import React from "react"
import ReactDOM from "react-dom"
import Budget from "./myBudget"
import "bootstrap/dist/css/bootstrap.min.css"
import { BudgetsProvider } from "./contexts/BudgetsContext"



ReactDOM.render(
  <React.StrictMode>
    <BudgetsProvider>
      <Budget/>
    </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById("root")
)