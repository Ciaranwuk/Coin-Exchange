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
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance';
        let balanceToggle = this.props.showBalance ? <> Balance: ${this.props.amount} </> : null;

        return (
            <Section>
             {balanceToggle}
             <button onClick={this.props.handleToggleBalance}>{buttonText}</button>
            </Section>
        );
    }
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}