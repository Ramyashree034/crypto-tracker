import React from 'react';
import cryptoData from '../../data/sampleData';// Make sure this path is correct

const CryptoTable = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Crypto Price Tracker</h1>
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h%</th>
            <th>24h%</th>
            <th>7d%</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((coin, index) => (
            <tr key={coin.id}>
              <td>{index + 1}</td>
              <td><img src={coin.logo} alt={coin.name} width="30" /></td>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>${coin.price.toLocaleString()}</td>
              <td style={{ color: coin.change1h < 0 ? 'red' : 'green' }}>
                {coin.change1h}%
              </td>
              <td style={{ color: coin.change24h < 0 ? 'red' : 'green' }}>
                {coin.change24h}%
              </td>
              <td style={{ color: coin.change7d < 0 ? 'red' : 'green' }}>
                {coin.change7d}%
              </td>
              <td>${coin.marketCap.toLocaleString()}</td>
              <td>${coin.volume24h.toLocaleString()}</td>
              <td>{coin.circulatingSupply.toLocaleString()}</td>
              <td>{coin.maxSupply.toLocaleString()}</td>
              <td><img src={coin.chart} alt="chart" width="60" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;