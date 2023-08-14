import { useBudgets } from "../contexts/BudgetsContext"
import BudgetCard from "./BudgetCard"

export default function TotalSavedCard(props) {
    const { expenses, budgets, income } = useBudgets()
    // total of all expenses
    const amount = income.reduce((total, income) => total + income.amount, 0)
        - expenses.reduce((total, expense) => total + expense.amount, 0)
    // account for income and all budgets in the max amount budgeted
    //const max = budgets.reduce((total, budget) => total + budget.max, 0)


    // if there are no expenses/budgets do not show the total


    return <BudgetCard amount={amount} name="Total Saved" gray hideButtons {...props}/>
}
