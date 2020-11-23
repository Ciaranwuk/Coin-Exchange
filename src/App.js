import React, {useState, useEffect} from "react";
import CoinList from './Components/CoinList/CoinList';
import AccountBalance from './Components/AccountBalance/AccountBalance';
import Header from './Components/Header/Header';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
text-align: center;
background-color: rgb(20, 56, 97);
color: #cccccc;
`;

const COIN_COUNT = 10;
const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';

function App(props) {

  const [balance, setBalance] =  useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
    let response = await axios.get('https://api.coinpaprika.com/v1/coins')
    let coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises)
    const coinPriceData = coinData.map(function(response){
      const coin = response.data;
      return{
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: parseFloat(Number(coin.quotes['USD'].price).toFixed(2)),
      };
    });
    setCoinData(coinPriceData);
  }

  useEffect(function() {
    if (coinData.length === 0) {
      componentDidMount();
    }
  });

  const handleRefresh = async (valueChangeId) => {
    let response = await axios.get(tickerUrl + valueChangeId);
    debugger;
    const refreshedData = response.data;
    const newCoinData = coinData.map( function( values ) {
      let newValues = {...values};
      if (valueChangeId === values.key) {
        newValues.price = parseFloat(Number(refreshedData.quotes['USD'].price).toFixed(2));
        console.log ("refreshed");
      }
      return newValues;
    });

    setCoinData(newCoinData);
  }

  const handleToggleBalance = () => {
    setShowBalance(oldValue => !oldValue);
  }

    return (
      <Div>
        <Header/>
        <AccountBalance amount= {balance} showBalance={showBalance}
          handleToggleBalance = {handleToggleBalance} />
        <CoinList coinData={coinData} handleRefresh={handleRefresh}
          showBalance = {showBalance} />
      </Div>
    );

}


export default App;
