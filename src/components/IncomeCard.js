import { useBudgets } from "../contexts/BudgetsContext"
import BudgetCard from "./BudgetCard"

export default function IncomeCard() {
    const { income } = useBudgets()
    const amount = income.reduce((total, income) => total + income.amount, 0)

    return <BudgetCard amount={amount} name="Income" gray hideButtons incomeCard />
}