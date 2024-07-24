import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import './styles.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(500);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  const fetchExchangeRate = async () => {
    try {
      const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency.toLowerCase()}/${toCurrency.toLowerCase()}.json`);
      const data = await response.json();
      setExchangeRate(data[toCurrency.toLowerCase()]);
      setDate(data.date);
      convertCurrency(amount, data[toCurrency.toLowerCase()]);
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
    }
  };

  const convertCurrency = (value, rate) => {
    const result = (value * rate).toFixed(2);
    setConvertedAmount(result);
  };

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(value);
    convertCurrency(value, exchangeRate);
  };

  const handleCurrencyChange = (e, type) => {
    const value = e.target.value;
    if (type === 'from') {
      setFromCurrency(value);
    } else {
      setToCurrency(value);
    }
  };

  return (
    <div className="converter">
      <h2>{amount} {fromCurrency} equals</h2>
      <h1>{convertedAmount} {toCurrency}</h1>
      <p>{date} UTC · Disclaimer</p>
      <div className="input-group">
        <input type="number" value={amount} onChange={handleAmountChange} />
        <select value={fromCurrency} onChange={(e) => handleCurrencyChange(e, 'from')}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more currency options */}
        </select>
      </div>
      <div className="input-group">
        <input type="number" value={convertedAmount} readOnly />
        <select value={toCurrency} onChange={(e) => handleCurrencyChange(e, 'to')}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          {/* Add more currency options */}
        </select>
      </div>
    </div>
  );
};

render(<CurrencyConverter />, document.getElementById('app'));