import { useState } from "react";
import "./style.css";
const TipCalculator = () => {
  const [billAmount, setBillAmout] = useState(null);
  const [tip, setTip] = useState(null);
  const [total, setTotal] = useState(null);

  const handleSumbit = (e) => {
    e.preventDefault();
    const bill = parseFloat(billAmount);
    const tipPercentage = parseFloat(tip);

    const tipAmount = tipPercentage * (bill / 100);
    const result = bill + tipAmount;

    setTotal(result.toFixed(2));
  };

  return (
    <>
      <div className="container">
        <h1>Tip Calculator</h1>
        <p>Enter the bill amount and tip tercentage to calculate the total.</p>
        <form className="form" onSubmit={handleSumbit}>
          <label className="label">Bill Amount</label>
          <input
            type="number"
            className="form-input"
            required
            value={billAmount}
            onChange={(e) => setBillAmout(e.target.value)}
          />
          <label className="label">Tip Percentage</label>
          <input
            type="number"
            className="form-input"
            required
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />
          <button type="submit" className="btn">
            Calculate
          </button>
        </form>
        <p>
          Total <span>{total}</span>
        </p>
      </div>
    </>
  );
};

export default TipCalculator;
