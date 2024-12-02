import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Order, Card, Highlight, Colors, FilledHeader  } from 'e-ui-react';
import { DocumentHeader } from "@DocUtils/DocHeaders.js";

export const ColorPalettePage = () =>{

const ColorPaletteFrame = () => {
  const data = [
    { background: { label: "Deep Champagne", color: "#fbdea2" }, font: { label: "Dark Bronze", color: "#974806" } },
    { background: { label: "Sepia", color: "#783719" }, font: { label: "Pale Peach", color: "#dfc0b2" } },
    { background: { label: "Bistre", color: "#442216" }, font: { label: "Golden Beige", color: "#cbb060" } },
    { background: { label: "Antique White", color: "#f8edd7" }, font: { label: "Deep Purple", color: "#4c096d" } },



    { background: { label: "White", color: "#fff" }, font: { label: "Dark Indigo Blue", color: "#31356d" } },
    { background: { label: "Regalia", color: "#62348e" }, font: { label: "White", color: "#fff" } },
    { background: { label: "Ateneo Blue", color: "#073a69" }, font: { label: "Light Coral", color: "#fcc09d" } },

    { background: { label: "Brown Coffee", color: "#461d3b" }, font: { label: "Beige Sand", color: "#e4c5a8" } },



    
    { background: { label: "Light Cream", color: "#fef0d5" }, font: { label: "Crimson Blaze", color: "#c1121f" } },
    { background: { label: "Peach Yellow", color: "#fce3aa" }, font: { label: "Dark Indigo Blue", color: "#31356d" } },
    { background: { label: "Platinum", color: "#e8e8e8" }, font: { label: "Black", color: "#000" } },

    { background: { label: "Mauve", color: "#d6c9c5" }, font: { label: "Dark Indigo Blue", color: "#31356d" } },


    { background: { label: "Navy", color: "#0c2c47" }, font: { label: "White", color: "#fff" } },
    { background: { label: "Yellow", color: "#da9b2a" }, font: { label: "Light White", color: "#f5ffe7" } },
    { background: { label: "Green", color: "#2e5749" }, font: { label: "Light White", color: "#f5ffe7" } },
    { background: { label: "Orange", color: "#bf512c" }, font: { label: "Light White", color: "#f5ffe7" } },
    { background: { label: "Mint", color: "#abcbca" }, font: { label: "Navy", color: "#0c2c47" } },
    { background: { label: "Olive Green", color: "#446b1e" }, font: { label: "Platinum", color: "#e8e8e8" } },
    { background: { label: "Cerulean Blue", color: "#0979a9" }, font: { label: "Pale Periwinkle", color: "#dfe2fc" } },
    { background: { label: "Burgundy", color: "#830220" }, font: { label: "Pale Periwinkle", color: "#dfe2fc" } },



  ];

  const rowStyle = { display: 'flex', flexDirection: 'row', width: '100%' };
  const tileStyle = {
    width: '50%',
    flexDirection: 'column',
    display: 'flex',
    border: '1px solid #ccc',
    height: '40vh',
  };

  const process = (data) => {
    const rows = [];
    let currentRow = [];

    data.forEach((d, i) => {
      const tile = (
        <div
          key={i}
          style={{
            ...tileStyle,
            backgroundColor: d?.background?.color,
            color: d?.font?.color,
          }}
        >
          <div><h3 style={{padding:'0.5vw' }}>{i+1}.</h3></div>
          <div style={{ display: 'flex', flex:0.7,
    justifyContent: 'center',
    alignItems: 'center',}}>
            <b>
              <div style={{ textTransform: 'uppercase', letterSpacing:'0.2vw' }}>{d?.background?.color} | {d?.font?.color}</div>
              <div><h2>{d?.background?.label} | {d?.font?.label}</h2></div>
              <div style={{ textTransform: 'uppercase' }}>Background | Font Color</div>
            </b>
          </div>
        </div>
      );

      currentRow.push(tile);

      // Add row to rows array after every 2 items or at the last item
      if ((i + 1) % 2 === 0 || i === data.length - 1) {
        rows.push(
          <div key={`row-${rows.length}`} style={rowStyle}>
            {currentRow}
          </div>
        );
        currentRow = [];
      }
    });

    return rows;
  };

  return <div>{process(data)}</div>;
};

    useEffect(() => {
        window.scrollTo(0, 0);
       }, []);
       return (<>
          <DocumentHeader title="Color Palette" />
          <div className="mtop15p">
          <ContainerFluid>
            <Row>
              <Col md={12}>
                <ColorPaletteFrame />
              </Col>
            </Row>
          </ContainerFluid>
          </div>
       </>);
};
