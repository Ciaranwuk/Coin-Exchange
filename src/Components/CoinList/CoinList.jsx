import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
margin: 50px auto 50px auto;
display: inline-block;
font-size:1.4rem;
`;

export default function CoinList(props) {

        let balanceToggle = props.showBalance ? <th> Balance </th> : null;
        return (
            <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price</th>
                    {balanceToggle}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                props.coinData.map ( ({key, name, ticker, price, balance}) => 
                    <Coin 
                        key= {key} 
                        id = {key}
                        handleRefresh={props.handleRefresh}    
                        showBalance = {props.showBalance}
                        name={name} 
                        ticker={ticker}
                        balance= {balance}   
                        price={price} />
                )
            }
            </tbody>
            </Table>
        )
}



