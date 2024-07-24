import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import './styles.css';

const CurrencyConverter = () => {
  const [amount1, setAmount1] = useState(500);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');
  const [date, setDate] = useState(null);

  const fetchExchangeRate = async () => {
    try {
      const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount1}&from=${currency1}&to=${currency2}`);
      const data = await response.json();
      setAmount2(Number(data.rates[currency2]).toFixed(2));
      setDate(data.date);
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
    }
  };

  useEffect(() => {
    if (currency1 !== currency2) {
      fetchExchangeRate();
    } else {
      setAmount2(amount1);
      setDate(new Date().toISOString().split('T')[0]);
    }
  }, [currency1, currency2, amount1]);

  const handleAmount1Change = (e) => {
    setAmount1(e.target.value);
  };

  const handleAmount2Change = (e) => {
    setAmount2(e.target.value);
    setAmount1((e.target.value / (amount2 / amount1)).toFixed(2));
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
          <option value="AUD">Australian Dollar</option>
          <option value="CAD">Canadian Dollar</option>
          <option value="CHF">Swiss Franc</option>
          <option value="CNY">Chinese Yuan</option>
          <option value="SEK">Swedish Krona</option>
          <option value="NZD">New Zealand Dollar</option>
        </select>
      </div>
      <div className="input-group">
        <input type="number" value={amount2} onChange={handleAmount2Change} />
        <select value={currency2} onChange={handleCurrency2Change}>
          <option value="EUR">Euro</option>
          <option value="USD">United States Dollar</option>
          <option value="GBP">British Pound</option>
          <option value="JPY">Japanese Yen</option>
          <option value="AUD">Australian Dollar</option>
          <option value="CAD">Canadian Dollar</option>
          <option value="CHF">Swiss Franc</option>
          <option value="CNY">Chinese Yuan</option>
          <option value="SEK">Swedish Krona</option>
          <option value="NZD">New Zealand Dollar</option>
        </select>
      </div>
    </div>
  );
};

render(<CurrencyConverter />, document.getElementById('app'));