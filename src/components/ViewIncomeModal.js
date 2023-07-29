import { Modal, Button, Stack } from "react-bootstrap"
import {  useBudgets } from "../contexts/BudgetsContext"
import { currencyFormatter } from "../utils"

export default function ViewIncomeModal({ budgetId, handleClose }) {
    const {  setIncome, deleteIncome } = useBudgets()

    return (
        <Modal show={budgetId != null} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Stack direction="horizontal" gap="2">
                        <div>Income</div>
                    </Stack>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Stack direction="vertical" gap="3">
                    {setIncome.map(income => (
                        <Stack direction="horizontal" gap="2" key={income.id}>
                            <div className="me-auto fs-4">{income.description}</div>
                            <div className="fs-5">
                                {currencyFormatter.format(income.amount)}
                            </div>
                            <Button
                                onClick={() => deleteIncome(income)}
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
