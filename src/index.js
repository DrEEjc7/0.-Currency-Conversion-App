import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import './styles.css';

const CurrencyConverter = () => {
  const [amount1, setAmount1] = useState('0,00');
  const [amount2, setAmount2] = useState('0,00');
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');
  const [exchangeTime, setExchangeTime] = useState('');

  const formatNumber = (num) => num.toFixed(2).replace('.', ',');
  const parseNumber = (str) => parseFloat(str.replace(',', '.'));

  const fetchExchangeRate = async (value, from, to) => {
    if (value === '0,00' || from === to) {
      setAmount2('0,00');
      return;
    }
    try {
      const response = await fetch(`https://api.frankfurter.app/latest?amount=${parseNumber(value)}&from=${from}&to=${to}`);
      const data = await response.json();
      setAmount2(formatNumber(data.rates[to]));
      const date = new Date();
      setExchangeTime(`Exchange Time: ${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString().slice(-2)} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`);
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
    }
  };

  useEffect(() => {
    fetchExchangeRate(amount1, currency1, currency2);
  }, [currency1, currency2]);

  const handleAmount1Change = (e) => {
    const value = e.target.value.replace(/[^0-9,]/g, '');
    setAmount1(value);
    fetchExchangeRate(value, currency1, currency2);
  };

  const handleAmount2Change = (e) => {
    const value = e.target.value.replace(/[^0-9,]/g, '');
    setAmount2(value);
    fetchExchangeRate(value, currency2, currency1);
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
        <p>{exchangeTime}</p>
      </div>
      <div className="input-group">
        <input type="text" value={amount1} onChange={handleAmount1Change} />
        <select value={currency1} onChange={handleCurrency1Change}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="CNY">CNY</option>
          <option value="SEK">SEK</option>
          <option value="NZD">NZD</option>
        </select>
      </div>
      <div className="input-group">
        <input type="text" value={amount2} onChange={handleAmount2Change} />
        <select value={currency2} onChange={handleCurrency2Change}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="CNY">CNY</option>
          <option value="SEK">SEK</option>
          <option value="NZD">NZD</option>
        </select>
      </div>
    </div>
  );
};

render(<CurrencyConverter />, document.getElementById('app'));