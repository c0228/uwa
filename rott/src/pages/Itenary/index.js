// Home.jsx
import React, { useState, useEffect, useRef } from "react";
// IMPORTANT: import your local custom Autocomplete (the one we edited)
// If you are still importing from 'e-ui-react', replace path accordingly.
 // <- ensure this path points to your custom file
import { ContainerFluid, Row, Col, Autocomplete } from "e-ui-react";

const Itenary = () => {

    const [results, setResults] = useState([]);

const fetchResults = (search) => {
  if (!search) {
    setResults([]);
    return;
  }

  fetch(
    "https://photon.komoot.io/api/?q=" +
      search +
      "&limit=40&lang=en" +
      "&osm_tag=place:city" +
      "&osm_tag=place:town" +
      "&osm_tag=place:village"
  )
    .then(r => r.json())
    .then(data => {
      const list = data.features.map(f =>
        f.properties.countrycode +
        " : " +
        f.properties.name + ", " +
        f.properties.state + ", " +
        f.properties.country
      );
      setResults(list);
    });
};
  return (
    <ContainerFluid>
      <Row>
        <Col md={3}>
            <Autocomplete
  name="citySearch"
  label="City Live Search"
  placeholder="Type city name"
  autoCompleteData={results}
  onChange={(value) =>{
     fetchResults(value);
  }}
/>  
        </Col>
      </Row>
    </ContainerFluid>
  );
};

export default Itenary;
