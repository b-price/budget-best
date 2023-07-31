import { useBudgets } from "../contexts/BudgetsContext"
import BudgetCard from "./BudgetCard"

export default function IncomeCard(props) {
    const { income } = useBudgets()
    const amount = income.reduce((total, income) => total + income.amount, 0)
    const expensesAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
    // Calculate the remaining balance by subtracting expenses from income
    const remainingBalance = incomeAmount - expensesAmount;

    return <BudgetCard 
    amount={incomeAmount} 
    name="Income" 
    remainingBalance={remainingBalance}
    gray 
    hideButtons 
    incomeCard 
    {...props} />
}
