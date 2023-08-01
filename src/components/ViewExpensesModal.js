import { Modal, Button, Stack } from "react-bootstrap"
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetsContext"
import { currencyFormatter } from "../utils"
import UncategorizedBudgetCard from "./UncategorizedBudgetCard"

export default function ViewExpensesModal({ budgetId, handleClose }) {
  const { getBudgetExpenses, 
          budgets, 
          deleteBudget, 
          deleteExpense } =useBudgets()

  const expenses = getBudgetExpenses(budgetId)

  // get the budget that the expenses are associated with
  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      // if uncategorized budget then use unccatigorized budgetID
      ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
      // else find the budgetId from all budgets
      : budgets.find(b => b.id === budgetId)

  return (
    <Modal show={budgetId != null} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Stack direction="horizontal" gap="2">
            {/* display the budget name when viewing expenses */}
            <div>Expenses - {budget?.name}</div>
            {budgetId !== UNCATEGORIZED_BUDGET_ID && (
              // button to delete a budget
              <Button
                onClick={() => {
                  deleteBudget(budget)
                  handleClose()
                }}
                variant="outline-danger"
              >
                Delete
              </Button>
            )}
          </Stack>
        </Modal.Title>
      </Modal.Header>

      {/* contains the expenses in the budget */}
      <Modal.Body>
        <Stack direction="vertical" gap="3">
          {/* loop through all expenses that were created */}
          {expenses.map(expense => (
            <Stack direction="horizontal" gap="2" key={expense.id}>
              <div className="me-auto fs-4">{expense.description}</div>
              <div className="fs-5">
                {currencyFormatter.format(expense.amount)}
              </div>

              {/* button to delete and expense */}
              <Button
                onClick={() => deleteExpense(expense)}
                size="sm"
                variant="outline-danger"
              >
                &times;
              </Button>
            </Stack>
          ))}
        </Stack>
      </Modal.Body>
    </Modal>
  )
}
