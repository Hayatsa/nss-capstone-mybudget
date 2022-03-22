const remoteURL = "http://localhost:8088"

export const getBudgetById = (budgetId) => {
  //be sure your animals have good data and related to a location and budget
  return fetch(`${remoteURL}/budgets/${budgetId}?_expand=name&_expand=address`)
  .then(res => res.json())
}

export const getAllBudgets = () => {
  return fetch(`${remoteURL}/budgets`)
  .then(res => res.json())
}

export const deleteBudget = (id) => {
  return fetch(`${remoteURL}/budgets/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}

export const addBudget = (newBudget) => {
  return fetch(`${remoteURL}/budgets`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newBudget)
  }).then(response => response.json())
}

export const updateBudget = (editedBudget) => {
  return fetch(`${remoteURL}/budgets/${editedBudget.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedBudget)
  }).then(data => data.json());
}