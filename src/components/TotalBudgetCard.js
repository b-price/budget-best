import { useBudgets } from "../contexts/BudgetsContext"
import BudgetCard from "./BudgetCard"

export default function TotalBudgetCard() {
  const { expenses, budgets, income } = useBudgets()
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
                 
  const max = budgets.reduce((total, budget) => total + budget.max, 0) +
              income.reduce((total, income) => total + income.amount, 0)
  
  // if there are no expenses/budgets do not show the total
  if (max === 0) return null

  return <BudgetCard amount={amount} name="Total Expenses" gray max={max} hideButtons />
}
