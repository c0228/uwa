import React from "react";
import { ContainerFluid, Row, Col, Card, Badge, Icon } from "e-ui-react";
import { CastStudyData } from './data.js';

/* =========================
   HIGHLIGHT LIST COMPONENT
========================= */
const Highlights = ({ title, icon, items }) => (
  <div className="mtop15p">
    <div
      style={{
        padding: "6px 10px 8px 15px",
        fontSize: "16px",
        backgroundColor: "#e5dada",
        borderRadius: "5px 18px 18px 5px"
      }}
    >
      <Icon
        type="FontAwesome"
        name={icon.title.label}
        size={icon.title.size}
        color={icon.title.color}
        style={{ marginRight: "6px" }}
      />
      <b>{title}</b>
    </div>

    <div className="padLeft15p padTop10p">
      <div className="kyt-hgl-container">
        {items.map((item, index) => (
          <div key={index} className="kyt-hgl-item">
            <Icon
              type="FontAwesome"
              name={icon.list.label}
              size={icon.list.size}
              color={icon.list.color}
              className="kyt-hgl-icon"
            />
            <span className="kyt-hgl-text app-text">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* =========================
   CASE STUDY CARD
========================= */
const CaseStudyCard = ({ data }) => (
  <div className="mtop15p">
    <div style={{ minHeight:"73vh" }}>
      <div>
      <Badge type="danger" label={<b>Case #{data.index}</b>} size="12" />

      <h4 className="mtop5p">
        <b>{data.title}</b>
      </h4>

      <p className="app-text">{data.desc}</p>

      <Row>
        <Col md={6}>
          <Highlights
            title="Risk to Society"
            icon={{
              title: { label: "fa-warning", size: 14, color: "red" },
              list: { label: "fa-times-circle", size: 14, color: "red" }
            }}
            items={data.riskToSociety}
          />
        </Col>

        <Col md={6}>
          <Highlights
            title="How KYT Resolves This?"
            icon={{
              title: { label: "fa-check-circle", size: 16, color: "green" },
              list: { label: "fa-check-circle", size: 16, color: "green" }
            }}
            items={data.kytResolution}
          />
        </Col>
      </Row>

      {/* Outcome */}
      <div style={{ backgroundColor: "#beffa9", borderBottomRightRadius: "18px" }}>
        <span
          style={{
            backgroundColor: "green",
            padding: "6px 12px",
            color: "#fff",
            display: "inline-block"
          }}
        >
          <b>Our Platform Outcome</b>
        </span>
        <div
          style={{
            borderLeft: "3px solid green",
            padding: "15px",
            color: "#000"
          }}
        >
          {data.outcome}
        </div>
      </div>
              
      </div>
    </div>
  </div>
);

/* =========================
   MAIN COMPONENT
========================= */

const ImgDisplay = ({ src }) =>{
  return (<div style={{
    display: "flex",
    alignItems: "center",      // Vertical center
    justifyContent: "center",  // Horizontal center
    height: "73vh"             // Needed for vertical centering
  }}
>
  <img
    src={src}
    alt=""
    style={{
      width: "100%",
      height: "auto",
      maxHeight: "73vh",
      objectFit: "contain"
    }}
  /></div>);
}

const Listing = () => (
  <ContainerFluid>
    {CastStudyData?.map((d, i)=>{
      if(i%2===0){
        return (<Row className="mtop15p">
          <Col md={6}><div className="mtop15p" key={i}><CaseStudyCard data={d} /></div></Col>
          <Col md={6}><ImgDisplay src={d?.img} /></Col>
        </Row>);
      } else {
        return (<Row>
          <Col md={6}><ImgDisplay src={d?.img} /></Col>
          <Col md={6}><div className="mtop15p" key={i}><CaseStudyCard data={d} /></div></Col>
        </Row>);
      }
    })}
  </ContainerFluid>
);

export default Listing;
