function Summary() {
  return (
    <div className="summary">
      <h1 className="summary__title">Finishing up</h1>
      <p className="summary__desc">Double-check everything looks OK before confirming</p>
      <div className="summary__main-container">
        <div className="summary__plan-box">
          <div className="summary__plan-text">
            <span className="summary__plan-name">Arcade (Monthly)</span>
            <button className="summary__plan-change-btn">Change</button>
          </div>
          <span className="summary__plan-price">$9/mo</span>
        </div>
        <div className="summary__add-ons-box">
          <span className="summary__add-ons-name">Online service</span>
          <span className="summary__add-ons-price">+$1/mo</span>
        </div>
      </div>
      <div className="summary__total-box">
        <span className="summary__total-text">Total (per month)</span>
        <span className="summary__total-price">+12$/mo</span>
      </div>
    </div>
  )
}

export default Summary