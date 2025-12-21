import React from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import Welcome from "./components/Welcome/index.js";
import Listing from "./components/Listing/index.js";
import './index.css';

const CaseStudies = () =>{
 return (<div>
   <Header menulinks={HeaderMenu} activeId="CaseStudies" />
   <Welcome />
   <Listing />

<section className="py-5">
  <div className="container">

    <div className="row g-4">

      <div className="col-md-6">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <span className="badge bg-primary mb-2">Residential Rental</span>
            <h5 className="card-title mt-2">Apartment Owner Avoided Rental Fraud</h5>
            <p className="card-text text-muted">
              A landlord in Hyderabad was about to rent out a 2BHK apartment.
              KYT verification revealed identity mismatch and previous rent default indicators.
            </p>

            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">✔ Aadhaar-based identity verification</li>
              <li className="list-group-item">✔ DOB cross-check & risk scoring</li>
              <li className="list-group-item">✔ Tenant history indicators</li>
            </ul>

            <p className="fw-semibold text-success">
              Result: Rental fraud prevented before agreement execution.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <span className="badge bg-success mb-2">Commercial Lease</span>
            <h5 className="card-title mt-2">Property Manager Reduced Legal Disputes</h5>
            <p className="card-text text-muted">
              A commercial building owner faced frequent disputes due to undocumented tenants.
              KYT ensured verification before onboarding.
            </p>

            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">✔ KYT verification before lease</li>
              <li className="list-group-item">✔ Consent & OTP proof captured</li>
              <li className="list-group-item">✔ Digital agreement records</li>
            </ul>

            <p className="fw-semibold text-success">
              Result: Zero disputes reported after KYT adoption.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <span className="badge bg-warning text-dark mb-2">Uneducated Tenants</span>
            <h5 className="card-title mt-2">Digital Consent Without Literacy Barriers</h5>
            <p className="card-text text-muted">
              KYT enabled landlords to onboard tenants who could not read or write,
              while maintaining legal consent.
            </p>

            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">✔ OTP-based consent verification</li>
              <li className="list-group-item">✔ Timestamped audit logs</li>
              <li className="list-group-item">✔ Section 65B compliant records</li>
            </ul>

            <p className="fw-semibold text-success">
              Result: Legally valid onboarding without physical paperwork.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <span className="badge bg-info text-dark mb-2">PG & Hostels</span>
            <h5 className="card-title mt-2">Bulk Tenant Verification at Scale</h5>
            <p className="card-text text-muted">
              A PG operator onboarding 200+ tenants monthly automated verification using KYT.
            </p>

            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">✔ Instant tenant screening</li>
              <li className="list-group-item">✔ Risk categorization (Low/Medium/High)</li>
              <li className="list-group-item">✔ Centralized tenant dashboard</li>
            </ul>

            <p className="fw-semibold text-success">
              Result: 80% reduction in onboarding time.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="py-5 bg-white">
  <div className="container text-center">
    <h2 className="fw-bold mb-4">KYT Platform Impact</h2>
    <div className="row g-4">
      <div className="col-md-3">
        <div className="metric text-primary">95%</div>
        <p>Identity Match Accuracy</p>
      </div>
      <div className="col-md-3">
        <div className="metric text-success">80%</div>
        <p>Faster Tenant Onboarding</p>
      </div>
      <div className="col-md-3">
        <div className="metric text-warning">60%</div>
        <p>Dispute Reduction</p>
      </div>
      <div className="col-md-3">
        <div className="metric text-danger">0</div>
        <p>Data Stored (Hashed Only)</p>
      </div>
    </div>
  </div>
</section>

<section className="py-5 bg-dark text-white text-center">
  <div className="container">
    <h2 className="fw-bold">Want Similar Results?</h2>
    <p className="lead mt-3">
      Verify tenants instantly before renting.  
      No paperwork. No storage of sensitive data.
    </p>
    <a href="#" className="btn btn-primary btn-lg mt-3">
      Start KYT Verification
    </a>
  </div>
</section>


 </div>);
};

export default CaseStudies;