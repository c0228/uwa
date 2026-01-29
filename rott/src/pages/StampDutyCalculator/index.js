import React, { useState } from "react";
import { STATE_RULES } from "./stateRules.js";
import './index.css';

const SERVICE_FEE = 499;
const REGISTRATION_FEE = 1100;

const CalculatorUI = ({ state, setState, type, setType, rent, setRent, months, setMonths }) => {
  return (
    <div className="form">
      <h2>Rental Agreement Cost Calculator</h2>

      <label>State</label>
      <select value={state} onChange={e => setState(e.target.value)}>
        <option value="">Select State</option>
        {Object.keys(STATE_RULES).map(s => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      <label>Agreement Type</label>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="commercial">Commercial</option>
        <option value="residential">Residential</option>
      </select>

      <label>Monthly Rent (₹)</label>
      <input type="number" value={rent} onChange={e => setRent(e.target.value)} />

      <label>Agreement Duration (Months)</label>
      <input type="number" value={months} onChange={e => setMonths(e.target.value)} />
    </div>
  );
};

const StampDutyCalculator = () => {
  const [state, setState] = useState("");
  const [type, setType] = useState("commercial");
  const [rent, setRent] = useState("");
  const [months, setMonths] = useState(11);

  if (!state) return <CalculatorUI {...{ state, setState, type, setType, rent, setRent, months, setMonths }} />;

  const rule = STATE_RULES[state][type];
  const annualRent = rent * 12;
  const stampDuty = annualRent * rule.stampRate;

  const registrationRequired =
    rule.registrationAlways || months > (rule.registrationAfterMonths || 12);

  const total =
    stampDuty +
    SERVICE_FEE +
    (registrationRequired ? REGISTRATION_FEE : 0);

 return (<div>
    <div className="calculator">
      <CalculatorUI {...{ state, setState, type, setType, rent, setRent, months, setMonths }} />

      <div className="result">
        <h3>Quotation Summary</h3>
        <p><b>Stamp Duty:</b> ₹{stampDuty.toFixed(0)}</p>
        <p><b>Service Fee:</b> ₹{SERVICE_FEE}</p>
        {registrationRequired && <p><b>Registration Fee:</b> ₹{REGISTRATION_FEE}</p>}
        <hr />
        <p><b>Total Payable:</b> ₹{total.toFixed(0)}</p>
        <small>* Approximate values as per state rules</small>
      </div>
    </div>
 </div>);
};

export default StampDutyCalculator;