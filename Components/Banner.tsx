import React from 'react';
import '../Components/Banner.css';
import styled from 'styled-components';

const Para = styled.p`
font-size:14px;
color:rgb(244, 114, 114);
line-height:35px;
margin:0px;
padding:10px 40px`;

const StyledButton = styled.button`
font-size:15px;
background-color:rgb(71, 70, 70);
padding:.5rem;
color:rgb(244, 114, 114);
border-radius:4px;
border:none`;

export const Banner = () => {
  return (
    <section className="ban">
      <h1 className="head">
        Hi there we are provide many of offer for new joiners ,If team will
        consider new joinee.
      </h1>
      <Para>
        Paragraphs are the building blocks of papers. Many students define
        paragraphs in terms of length: a paragraph is a group of at least five
        sentences, a paragraph is half a page long, etc. In reality, though, the
        unity and coherence of ideas among sentences is what constitutes a
        paragraph. A paragraph is defined as “a group of sentences or a single
        sentence that forms a unit” (Lunsford and Connors 116).
      </Para>
      <StyledButton>Click me!</StyledButton>
    </section>
  );
};
