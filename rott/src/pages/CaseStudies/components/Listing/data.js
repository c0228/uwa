import React from "react";

export const CastStudyData = [
  {
    index: "01",
    img:"assets/images/case-study-01.png",
    title: "Identity Mismatch & Fake Tenant Profiles",
    desc: "A tenant provides Aadhaar details that belong to another person while occupying the property " +
      "under a false identity.",
    riskToSociety: ["Security threat to residents",
      "Difficulty for police verification",
      "Legal liability on owner / RWA",
      "Unauthorized occupants"
    ],
    kytResolution: ["Aadhaar number + DOB year cross-verification & Identity mismatch flagged instantly",
      "Tenant risk score generated",
      <span key="alert">
        Owner alerted <b>before agreement execution</b>
      </span>
    ],
    outcome: "Prevents unauthorized or fake tenants from entering the society."
  },
  {
    index: "02",
    img:"assets/images/case-study-02.png",
    title: "Tenant With History of Rent Default",
    desc: "Tenant vacates previous house without paying rent or damages property, then shifts to another society.",
    riskToSociety: ["Financial loss to owners", "Long legal disputes", "Repeat offenders move freely"],
    kytResolution: ["Tenant history indicators (non-sensitive signals)","Pattern-based risk scoring",
      (<span>Owner sees <b>Low / Medium / High risk</b> category</span>)
    ],
    outcome: "Landlords make informed decisions instead of blind trust."
  },
  {
    index: "03",
    title: "Unreported Tenants (Police Verification Failure)",
    desc: (<span>Tenant occupies house <b>without police or identity verification.</b></span>),
    riskToSociety: ["Police notices to owner / society", "Criminal liability", "Security audits fail"],
    kytResolution: ["Mandatory KYT check before move-in", "Digital verification logs", "Time-stamped consent & verification proof"],
    outcome: "Society remains compliant with local police verification norms."
  },
  {
    index: "04",
    title: "Subletting Without Owner or Society Approval",
    desc: (<span>Tenant illegally <b>sublets the house</b> to third parties.</span>),
    riskToSociety: ["Unknown residents", "Overcrowding", "Safety and hygiene issues", "Rule violations in gated communities"],
    kytResolution: ["Each occupant requires KYT verification", "OTP-based consent for new tenants", "Digital trail for occupant changes"],
    outcome: "No occupant can enter without verified consent and records."
  },
  {
    index: "05",
    title: "Uneducated Tenant – Consent Disputes",
    desc: (<span>Tenant later claims: <b>"I didn’t understand the agreement"</b> or "I never agreed to those terms."</span>),
    riskToSociety: ["Legal disputes", "Agreement validity questioned", "Owner helpless in court"],
    kytResolution: ["OTP-based consent confirmation", "Voice / SMS confirmation (optional)",
      (<span>Timestamped logs compliant with <b>IT Act & Section 65B</b></span>)],
    outcome: "Legally defensible digital consent without paperwork."
  },
  {
    index: "06",
    title: "Forged Rental Agreements",
    desc: (<span>Tenant submits <b>fake or edited rental agreements</b> to society or police.</span>),
    riskToSociety: ["Trust breakdown", "Legal complications", "Police scrutiny"],
    kytResolution: ["Digital agreement hash stored","Tamper-evident verification", "Agreement authenticity check anytime"],
    outcome: "Agreements cannot be altered without detection."
  },
  {
    index: "07",
    title: "Multiple Occupants Not Declared",
    desc: "Tenant declares one occupant but houses multiple people.",
    riskToSociety: ["Fire safety violations", "Water & electricity misuse", "Security concerns"],
    kytResolution: ["Occupant-wise KYT onboarding","RWA / owner visibility (role-based)","Digital occupancy records"],
    outcome: "Full transparency of who lives inside the society."
  },
  {
    index: "08",
    title: "Tenant Disappears Without Trace",
    desc: "Tenant vacates suddenly, leaving dues and no forwarding details.",
    riskToSociety: ["Financial loss","Legal dead-ends","No proof of occupancy"],
    kytResolution: ["Verified identity & contact logs","Occupancy timeline","Consent and verification history preserved"],
    outcome: "Owner retains traceable legal records even after exit."
  }
];