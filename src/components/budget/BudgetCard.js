import React from "react"
import "./Budget.css"
import { Link } from "react-router-dom";

export const BudgetCard = ({ budget, handleDeleteBudget }) => {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-budgetname">
            {budget.name}
          </span></h3>
          <p>Address: {budget.address}</p>
          <Link to={`/budgets/${budget.id}/edit`}> <button>Edit</button> </Link>
          <button type="button" onClick={() => handleDeleteBudget(budget.id)}>Remove</button>
        </div>
      </div>
    );
  }
