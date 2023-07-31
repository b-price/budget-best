import { Button, Card, ProgressBar, Stack } from "react-bootstrap"
import { currencyFormatter } from "../utils"

// budget card is also used for income card

export default function BudgetCard({
  name,
  amount,
  max,
  gray,
  hideButtons,
  incomeCard,
  onAddExpenseClick,
  onViewExpensesClick,
  onAddIncomeClick,
  onViewIncomeClick,

}) {
  const classNames = [] // check if the amount is > maximum
  // the class names are pushed in depending on the amount/max ratio
  if (amount > max) {
    classNames.push("bg-danger", "bg-opacity-10") // red background
    // will override the gray backround if the amount > max
  } else if (gray) {
    classNames.push("bg-light") // gray card
  }

  return (
    <Card className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {/* show the amount as the current amount / max */}
            {currencyFormatter.format(amount)}
            {max && (
              <span className="text-muted fs-6 ms-1">
                / 
                {currencyFormatter.format(max)}
              </span>
            )}
          </div>

        {/* specify the name of the card in card title */}
        </Card.Title>
        {max && (
          <ProgressBar
            className="rounded-pill"
            // the amount in the progress bar reflects how many expenses are in the budget
            variant={getProgressBarVariant(amount, max)}
            min={0} // min cannot be less than 0
            max={max}
            now={amount} // current amount
          />
        )}

        {/* hide the buttons in the total card since we cannot add/delete expenses/income */}
        {!hideButtons && (
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button
              variant="outline-primary"
              className="ms-auto"
              onClick={onAddExpenseClick}
            >
              Add Expense
            </Button>
            <Button onClick={onViewExpensesClick} variant="outline-secondary">
              View Expenses
            </Button>
          </Stack>
        )}
        {incomeCard && (
            <Stack direction="horizontal" gap="2" className="mt-4">
              <Button
                  variant="outline-success"
                  className="ms-auto"
                  onClick={onAddIncomeClick}
              >
                Add Income
              </Button>
              <Button onClick={onViewIncomeClick} variant="outline-secondary">
                View Income
              </Button>
              {/*Display the remaining balance here */}
              <div>
                <strong>Remaining Balance: </strong>
                {currencyFormatter.format(remainingBalance)}
              </div>
            </Stack>
        )}
      </Card.Body>
    </Card>
  )
}

function getProgressBarVariant(amount, max) {
  // amount of expenses compared to the budget limit is the 
  const ratio = amount / max
  // if budget is less than 25% used then show a green color
  if (ratio < 0.25) return "success"
  // if the budget is less than 50% used then show no color
  if (ratio < 0.5) return "primary"
  // if the budget is 50%-75% used then show a yellow color
  if (ratio < 0.75) return "warning"
  // if budget is 75% or over then show the bar as red
  return "danger"
}
