import React from 'react';
import { connect, styled } from 'frontity';

// destructure props from props upfront
const Hero = ({state, libraries}) => (

  <HeroOuter>
    <h2>{ props.title }</h2>
    <p>{ props.subtitle }</p>
  </HeroOuter>
    
)

export default connect( Hero );

// pass our component to styled.
// and pass className into component
const HeroOuter = styled.div`
  /* background-image:  url("${( props ) => props.bg}");
  opacity: ${( props ) => props.opacity}; */
  height: 300px;
  width: 100%;
  padding: 15px;
  color: white;
`