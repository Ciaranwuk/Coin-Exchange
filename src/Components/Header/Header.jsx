import React, { Component } from 'react'
import logo from '../logo.svg';
import styled from 'styled-components';

const Wrapper = styled.section`
background-color: #282c34;
min-height: 20vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
color: white;
`;

const Title = styled.h1`
font-size: 4rem;
`;

const Img = styled.img`
height: 20rem;
pointer-events: none;
`;

export default class Header extends Component {
    render() {
        return (
        <Wrapper>
          <Img src={logo} alt="React logo" />
          <Title>
            Coin Exchange
          </Title>
        </Wrapper> 
        )
    }
}
