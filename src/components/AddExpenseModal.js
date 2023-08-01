import { Form, Modal, Button } from "react-bootstrap"
import { useRef } from "react"
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from "../contexts/BudgetsContext"

export default function AddExpenseModal({
  show,
  handleClose,
  defaultBudgetId, // specifies the budget when adding an expense
}) {
  const descriptionRef = useRef()
  const amountRef = useRef()
  const budgetIdRef = useRef() // specifies what budget the expense falls under
  const { addExpense, budgets } = useBudgets()

  // function that adds the expense
  function handleSubmit(e) {
    e.preventDefault()
    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value,
    })
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {/* section for inputing the expense name (desc) */}
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control ref={descriptionRef} type="text" required />
          </Form.Group>

          {/* section for inputing the expense amount */}
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              ref={amountRef}
              type="number"
              required
              min={0}
              step={0.01}
            />
          </Form.Group>

          {/* section for inputing the budget category */}
          <Form.Group className="mb-3" controlId="budgetId">
            <Form.Label>Budget</Form.Label>
            {/* the default value is the defaultBudgetId */}
            {/* uses a select for a drop down menu */}
            <Form.Select defaultValue={defaultBudgetId} ref={budgetIdRef}>
              {/* takes care of the uncategorized budget category */}
              {/* if new expense is created from button above then it will automatically be uncategorized */}
              <option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
              {budgets.map(budget => (
                <option key={budget.id} value={budget.id}>
                  {budget.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  )
}
