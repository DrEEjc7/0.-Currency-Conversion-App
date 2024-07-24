import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import './styles.css';

const CurrencyConverter = () => {
  const [amount1, setAmount1] = useState(500);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    fetchExchangeRate();
  }, [currency1, currency2]);

  const fetchExchangeRate = async () => {
    try {
      const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency1.toLowerCase()}/${currency2.toLowerCase()}.json`);
      const data = await response.json();
      setExchangeRate(data[currency2.toLowerCase()]);
      setDate(new Date().toUTCString());
      convertCurrency(amount1, data[currency2.toLowerCase()], true);
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
    }
  };

  const convertCurrency = (value, rate, isAmount1) => {
    if (isAmount1) {
      setAmount1(value);
      setAmount2((value * rate).toFixed(2));
    } else {
      setAmount2(value);
      setAmount1((value / rate).toFixed(2));
    }
  };

  const handleAmount1Change = (e) => {
    const value = parseFloat(e.target.value);
    convertCurrency(value, exchangeRate, true);
  };

  const handleAmount2Change = (e) => {
    const value = parseFloat(e.target.value);
    convertCurrency(value, exchangeRate, false);
  };

  const handleCurrency1Change = (e) => {
    setCurrency1(e.target.value);
  };

  const handleCurrency2Change = (e) => {
    setCurrency2(e.target.value);
  };

  return (
    <div className="converter">
      <div className="result">
        <h2>{amount1} {currency1} equals</h2>
        <h1>{amount2} {currency2}</h1>
        <p>{date} · Disclaimer</p>
      </div>
      <div className="input-group">
        <input type="number" value={amount1} onChange={handleAmount1Change} />
        <select value={currency1} onChange={handleCurrency1Change}>
          <option value="USD">United States Dollar</option>
          <option value="EUR">Euro</option>
          <option value="GBP">British Pound</option>
          <option value="JPY">Japanese Yen</option>
        </select>
      </div>
      <div className="input-group">
        <input type="number" value={amount2} onChange={handleAmount2Change} />
        <select value={currency2} onChange={handleCurrency2Change}>
          <option value="EUR">Euro</option>
          <option value="USD">United States Dollar</option>
          <option value="GBP">British Pound</option>
          <option value="JPY">Japanese Yen</option>
        </select>
      </div>
    </div>
  );
};

render(<CurrencyConverter />, document.getElementById('app'));