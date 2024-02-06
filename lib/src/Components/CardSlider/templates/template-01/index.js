import React, { useState } from 'react';
import './index.css';

const Option = ({
  backgroundColor,
  backgroundImage,
  staticDisplay,
  content,
  active,
  handleClick,
}) => {
  return (
    <div
      className={`bs-cardSlider-template01-option ${active ? 'active' : ''}`}
      style={{ '--optionBackground': `url(${backgroundImage})`, backgroundColor: (backgroundColor?backgroundColor:'#000'),
        boxShadow: '2px 2px 2px 2px #808080' }}
      onClick={handleClick}
    >
        <div className="bs-cardSlider-template01-shadow"></div>
        <div className="bs-cardSlider-template01-label">
        {!active  && (staticDisplay)}
        <div className="bs-cardSlider-template01-info">
        {content}
        </div>
        </div>
      {/*
      <div className="bs-cardSlider-template01-label">
       
        <div className="bs-cardSlider-template01-info">
          <div className="bs-cardSlider-template01-main">{mainText}</div>
          <div className="bs-cardSlider-template01-sub">{subText}</div>
        </div>
      </div>*/}
  </div>
  );
};

const Template01 = ({ content }) => {
  const [activeOption, setActiveOption] = useState(0);

  const handleOptionClick = (index) => {
    setActiveOption(index);
  };

 

  return (
    <div className="bs-cardSlider-template01-options">
      {content?.map((option, index) => (
        <Option
          key={index}
          staticDisplay={option.staticDisplay}
          backgroundColor={option.backgroundColor}
          backgroundImage={option.backgroundImage}
          content={option.content}
          active={index === activeOption}
          handleClick={() => handleOptionClick(index)}
        />
      ))}
    </div>
  );
};

export default Template01;