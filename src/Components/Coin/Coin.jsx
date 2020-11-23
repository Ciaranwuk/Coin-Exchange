import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default function Coin(props) {

   const handleClick = (event) => {
        //prevent default acton of submitting the form
        event.preventDefault();
        props.handleRefresh(props.id);
   }
   
        let balanceToggle = props.showBalance ? <Td> {props.balance} </Td> : null;
        return (
            <tr>
                <Td>{props.name}</Td>
                <Td>{props.ticker}</Td>
                <Td>${props.price}</Td>
                {balanceToggle}
                <Td>
                    <form action="#" method="POST">
                        <button onClick={handleClick}>Refresh</button>
                    </form>
                </Td>
            </tr>
        )
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}