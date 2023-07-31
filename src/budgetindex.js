import React from "react"
import ReactDOM from "react-dom"
import BudgetApp from "./BudgetApp"
import "bootstrap/dist/css/bootstrap.min.css"
import { BudgetsProvider } from "./contexts/BudgetsContext"

ReactDOM.render(
  <React.StrictMode>
    <BudgetsProvider>
      <BudgetApp />
    </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
