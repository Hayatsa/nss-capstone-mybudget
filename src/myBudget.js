import { Button, Navbar, Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import AddBudgetForm from "./components/AddBudgetForm"
import AddExpenseForm from "./components/AddExpenseForm"
import BudgetDetails from "./components/BudgetDetails"
import BudgetCard from "./components/BudgetCard"
import TotalBudgetCard from "./components/TotalBudgetCard"
import { useState } from "react"
import { useBudgets } from "./contexts/BudgetsContext"


export const Budget = () => {

  const [showAddBudgetForm, setShowAddBudgetForm] = useState(false)
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false)
  const [viewExpensesFormBudgetId, setBudgetDetailsBudgetId] = useState()
  const [addExpenseFormBudgetId, setAddExpenseFormBudgetId] = useState()
  const { budgets, getBudgetExpenses } = useBudgets()

  const openAddExpenseForm = (budgetId) => {
    setShowAddExpenseForm(true)
    setAddExpenseFormBudgetId(budgetId)
  }

  return (
    <>
      <Navbar>
          <h1 className="me-auto">myBudget</h1>
          <Button className="me-2" variant="outline-secondary" >
            Login/Logout
          </Button>
      </Navbar>
      <Container className="my-4">
        <Stack direction="vertical" gap="2" className="mb-4">
        <Button variant="primary" onClick={() => setShowAddBudgetForm(true)}>
            Add Budget
          </Button>
          <Button variant="outline-primary" onClick={openAddExpenseForm}>
            Add Expense
          </Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {budgets.map(budget => {
            const amount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.amount,
              0
            )
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
                onAddExpenseClick={() => openAddExpenseForm(budget.id)}
                onViewExpensesClick={() =>
                  setBudgetDetailsBudgetId(budget.id)
                }
              />
            )
          })}
          
          <TotalBudgetCard />
        </div>
      </Container>
      <AddBudgetForm
        show={showAddBudgetForm}
        handleClose={() => setShowAddBudgetForm(false)}
      />
      <AddExpenseForm
        show={showAddExpenseForm}
        defaultBudgetId={addExpenseFormBudgetId}
        handleClose={() => setShowAddExpenseForm(false)}
      />
      <BudgetDetails
        budgetId={viewExpensesFormBudgetId}
        handleClose={() => setBudgetDetailsBudgetId()}
      />
    </>
  )
}

export default Budget