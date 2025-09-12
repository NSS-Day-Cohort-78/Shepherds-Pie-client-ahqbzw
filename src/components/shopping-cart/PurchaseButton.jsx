import { purchaseService } from "../services/PurchaseService"

export const PurchaseButton = () => {

    const handlePurchase = () => {
        purchaseService()
    }

    return (
        <button
            onClick={handlePurchase}>
            Purchase
        </button>
    )

}