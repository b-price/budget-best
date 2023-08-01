import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetsContext"
import BudgetCard from "./BudgetCard"

// card that deals with expenses that aren't in a specific budget category
export default function UncategorizedBudgetCard(props) {
  const { getBudgetExpenses } = useBudgets()
  // amount is total of all uncategorized budgets
  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  )
  // if there are no uncategorized budgets then do not show the card
  if (amount === 0) return null

  return <BudgetCard amount={amount} name="Uncategorized" gray {...props} />
}
