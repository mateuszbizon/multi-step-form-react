import { useEffect, useState } from "react";
import { SelectedItems } from "../../App"

type SummaryProps = {
  selectedItems: SelectedItems;
  isMonthly: boolean;
}

function Summary({ selectedItems, isMonthly }: SummaryProps) {
  const [totalAmount, setTotalAmount] = useState(0);

  function calculateTotalAmount() {
    let currentTotalAmount = 0

    if (selectedItems.addOns.length > 0) {
      selectedItems.addOns.forEach(addOns => {
        if (isMonthly) {
          currentTotalAmount += addOns.monthly;
        } else {
          currentTotalAmount += addOns.yearly;
        }
      })
    }

    if (isMonthly) {
      currentTotalAmount += selectedItems.selectedPlan.monthly;
      setTotalAmount(currentTotalAmount);
      return;
    }

    currentTotalAmount += selectedItems.selectedPlan.yearly;
    setTotalAmount(currentTotalAmount);
  }

  useEffect(() => {
    calculateTotalAmount();
  }, [])

  return (
    <div className="summary">
      <h1 className="summary__title">Finishing up</h1>
      <p className="summary__desc">Double-check everything looks OK before confirming</p>
      <div className="summary__main-container">
        <div className="summary__plan-box">
          <div className="summary__plan-text">
            <span className="summary__plan-name">Arcade ({isMonthly ? "Monthly" : "Yearly"})</span>
            <button className="summary__plan-change-btn">Change</button>
          </div>
          <span className="summary__plan-price">
            ${isMonthly ? selectedItems.selectedPlan.monthly : selectedItems.selectedPlan.yearly}/{isMonthly ? "mo" : "yr"}
          </span>
        </div>
        {selectedItems.addOns.map((item, index) => (
          <div key={index} className="summary__add-ons-box">
            <span className="summary__add-ons-name">{item.name}</span>
            <span className="summary__add-ons-price">+${isMonthly ? item.monthly : item.yearly}/{isMonthly ? "mo" : "yr"}</span>
          </div>
        ))}
      </div>
      <div className="summary__total-box">
        <span className="summary__total-text">Total (per {isMonthly ? "month" : "year"})</span>
        <span className="summary__total-price">+{totalAmount}$/{isMonthly ? "mo" : "yr"}</span>
      </div>
    </div>
  )
}

export default Summary