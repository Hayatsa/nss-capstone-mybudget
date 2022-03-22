import React, { useState, useEffect } from 'react';
import { BudgetCard } from './BudgetCard';
import { getAllBudgets, deleteBudget } from '../../modules/BudgetManager'
import { useNavigate } from 'react-router-dom';

export const BudgetList = () => {
    const [budgets, setBudgets] = useState([]);
  
    const getBudgets = () => {
      return getAllBudgets().then(budgetsFromAPI => {
        setBudgets(budgetsFromAPI)
      });
    };

    const handleDeleteBudget = id => {
      deleteBudget(id)
      .then(() => getAllBudgets().then(setBudgets));
  };

  const navigate = useNavigate();
  
    useEffect(() => {
      getBudgets();
    }, []);
  
    return (
      <>
        <section className="section-content">
          <button type="button" className="btn" onClick={() => {navigate("/budgets/create")}}>Add Owner</button>
        </section>
        <div className="container-cards">
          {budgets.map(budget => <BudgetCard key={budget.id} budget={budget} handleDeleteBudget={handleDeleteBudget} />)}
        </div>
      </>
    );
  };