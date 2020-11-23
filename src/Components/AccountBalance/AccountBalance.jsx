import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: right;
    padding: 1.5rem 5rem 1.5rem 0;
    color: white;
`;

export default function AccountBalance(props) {

        const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
        let balanceToggle = props.showBalance ? <> Balance: ${props.amount} </> : null;

        return (
            <Section>
             {balanceToggle}
             <button onClick={props.handleToggleBalance}>{buttonText}</button>
            </Section>
        );
    
}


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}