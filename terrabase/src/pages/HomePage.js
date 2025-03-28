import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useCryptoData from '../hooks/useCryptoData';
import '../styles/global.css';

const HomePage = () => {
  const { data: cryptos, loading, error } = useCryptoData();

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="homepage">
      <Header />
      <main>
        <h1>Popular Cryptocurrencies</h1>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Sustainability Score</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map((crypto, index) => (
              <tr key={crypto.id}>
                <td>{index + 1}</td>
                <td>{crypto.name}</td>
                <td>{crypto.symbol}</td>
                <td>{crypto.sustainabilityScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
