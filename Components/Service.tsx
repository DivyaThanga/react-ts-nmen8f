import React from 'react';
import comp from '../Components/comp.module.css';
import '../Components/Service.css';
import styled from 'styled-components';

const StyledButton = styled.button`
font-size:15px;
background-color:rgb(71, 70, 70);
padding:.5rem;
color:rgb(244, 114, 114);
border-radius:4px;
border:none`;

export const Service = () => {
  return (
    <section style={{ padding: '2rem' }}>
      <h1 className="heads">Services</h1>
      <p className="servpara">
        Paragraphs are the building blocks of papers. Many students define
        paragraphs in terms of length.
      </p>
      <div className={comp.Boxes}>
        <div className={comp.Box}>
          <div className={comp.BitBox}></div>
          <h4>Divya Thangavel</h4>
          <p className="servpara">He is good one girl in the world</p>
          <StyledButton>Click me!</StyledButton>
        </div>
        <div className={comp.Box}>
          <div className={comp.BitBox}></div>
          <h4>Divya Thangavel</h4>
          <p className="servpara">He is good one girl in the world</p>
          <StyledButton>Click me!</StyledButton>
        </div>
        <div className={comp.Box}>
          <div className={comp.BitBox}></div>
          <h4>Divya Thangavel</h4>
          <p className="servpara">He is good one girl in the world</p>
          <StyledButton>Click me!</StyledButton>
        </div>
      </div>
    </section>
  );
};
