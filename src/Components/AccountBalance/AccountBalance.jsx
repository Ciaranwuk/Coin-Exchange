import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: right;
    padding: 1.5rem 5rem 1.5rem 0;
    color: white;
`;

export default class AccountBalance extends Component {
    render() {
        return (
            <Section>
             Balance: ${this.props.amount}
            </Section>
        );
    }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}