import React, { useState, useMemo } from "react";
import { TextBox } from 'e-ui-react';

const StampDutyCalculatorBak = () => {
  const [aadhaarSign, setAadhaarSign] = useState(0);
  const [nonAadhaarSign, setNonAadhaarSign] = useState(0);
  const [stampPapers, setStampPapers] = useState(1);
  const [stampDuty, setStampDuty] = useState(0);

  /* ===== PRICING CONSTANTS ===== */
  const AADHAAR_ESIGN_PRICE = 25;
  const NON_AADHAAR_ESIGN_PRICE = 15;
  const STAMP_PAPER_PRICE = 45;
  const STAMP_ORDER_FEE = 500;
  const MIN_ESIGN_COST = 100;

  /* ===== CALCULATIONS ===== */
  const calculation = useMemo(() => {
    const aadhaarCost = aadhaarSign * AADHAAR_ESIGN_PRICE;
    const nonAadhaarCost = nonAadhaarSign * NON_AADHAAR_ESIGN_PRICE;

    const totalESignCost = aadhaarCost + nonAadhaarCost;
    const finalESignCost =
      totalESignCost > 0 ? Math.max(totalESignCost, MIN_ESIGN_COST) : 0;

    const stampPaperCost = stampPapers * STAMP_PAPER_PRICE;

    const totalPayable =
      finalESignCost +
      stampPaperCost +
      STAMP_ORDER_FEE +
      Number(stampDuty || 0);

    return {
      aadhaarCost,
      nonAadhaarCost,
      finalESignCost,
      stampPaperCost,
      totalPayable,
    };
  }, [aadhaarSign, nonAadhaarSign, stampPapers, stampDuty]);

  return (
    <div style={{ maxWidth: "480px", margin: "auto", fontFamily: "Arial" }}>
      <h2>Stamp Duty Calculator</h2>
      <label>Aadhaar eSign Count</label>
      <input
        type="number"
        min="0"
        value={aadhaarSign}
        onChange={(e) => setAadhaarSign(Number(e.target.value))}
      />

      <label>Non-Aadhaar eSign Count</label>
      <input
        type="number"
        min="0"
        value={nonAadhaarSign}
        onChange={(e) => setNonAadhaarSign(Number(e.target.value))}
      />

      <label>Stamp Papers Required</label>
      <input
        type="number"
        min="1"
        value={stampPapers}
        onChange={(e) => setStampPapers(Number(e.target.value))}
      />

      <label>Stamp Duty (Government Fee)</label>
      <input
        type="number"
        min="0"
        value={stampDuty}
        onChange={(e) => setStampDuty(Number(e.target.value))}
      />

      <hr />

      <h3>Cost Breakdown</h3>
      <p>Aadhaar eSign: ₹{calculation.aadhaarCost}</p>
      <p>Non-Aadhaar eSign: ₹{calculation.nonAadhaarCost}</p>
      <p><strong>eSign Total: ₹{calculation.finalESignCost}</strong></p>
      <p>Stamp Papers: ₹{calculation.stampPaperCost}</p>
      <p>Stamp Order Fee: ₹{STAMP_ORDER_FEE}</p>
      <p>Stamp Duty: ₹{stampDuty || 0}</p>

      <hr />

      <h2>Total Payable: ₹{calculation.totalPayable}</h2>

      <small style={{ color: "#666" }}>
        * Minimum eSign charge is ₹100<br />
        * Stamp duty varies by state
      </small>
    </div>
  );
};

export default StampDutyCalculatorBak;
