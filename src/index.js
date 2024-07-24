import { h, render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import './styles.css';

const API_KEY = 'cd4b0dcb2ae44818adee9d2420c46c84'; // Replace with your actual API key
const BASE_URL = 'https://api.currencyfreaks.com/latest?apikey=';

const CurrencyConverter = () => {
  const [amount1, setAmount1] = useState('0,00');
  const [amount2, setAmount2] = useState('0,00');
  const [currency1, setCurrency1] = useState('EUR');
  const [currency2, setCurrency2] = useState('USD');
  const [exchangeTime, setExchangeTime] = useState('');
  const [rates, setRates] = useState({});
  const [exchangeRate, setExchangeRate] = useState('');
  const [error, setError] = useState(null);

  const formatNumber = (num) => num.toFixed(2).replace('.', ',');
  const formatExchangeRate = (num) => num.toFixed(6).replace('.', ',');
  const parseNumber = (str) => parseFloat(str.replace(',', '.'));

  const fetchExchangeRates = async () => {
    const storedRates = localStorage.getItem('exchangeRates');
    const storedTimestamp = localStorage.getItem('exchangeRatesTimestamp');

    if (storedRates && storedTimestamp) {
      const currentTime = new Date().getTime();
      const storedTime = parseInt(storedTimestamp);

      // Check if stored rates are less than 12 hours old (for twice daily updates)
      if (currentTime - storedTime < 12 * 60 * 60 * 1000) {
        setRates(JSON.parse(storedRates));
        setExchangeTime(`Exchange Time: ${new Date(storedTime).toLocaleString()}`);
        return;
      }
    }

    try {
      const response = await fetch(`${BASE_URL}${API_KEY}`);
      const data = await response.json();
      if (data.rates) {
        setRates(data.rates);
        const date = new Date(data.date);
        const timeString = `Exchange Time: ${date.toLocaleString()}`;
        setExchangeTime(timeString);
        localStorage.setItem('exchangeRates', JSON.stringify(data.rates));
        localStorage.setItem('exchangeRatesTimestamp', date.getTime().toString());
        setError(null);
      } else {
        throw new Error('Failed to fetch rates');
      }
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      setError(`Failed to fetch latest rates: ${error.message}. Using stored rates.`);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, []);

  useEffect(() => {
    if (Object.keys(rates).length > 0) {
      convertCurrency(amount1, currency1, currency2);
      updateExchangeRate(currency1, currency2);
    }
  }, [rates, currency1, currency2, amount1]);

  const updateExchangeRate = (from, to) => {
    if (from === to) {
      setExchangeRate(`1 ${from} = 1,000000 ${to}`);
    } else {
      const rate = parseFloat(rates[to]) / parseFloat(rates[from]);
      setExchangeRate(`1 ${from} = ${formatExchangeRate(rate)} ${to}`);
    }
  };

  const convertCurrency = (value, from, to) => {
    if (value === '0,00' || from === to) {
      setAmount2('0,00');
      return;
    }
    const usdValue = parseNumber(value) / parseFloat(rates[from]);
    const convertedValue = usdValue * parseFloat(rates[to]);
    setAmount2(formatNumber(convertedValue));
  };

  const handleAmount1Change = (e) => {
    const value = e.target.value.replace(/[^0-9,]/g, '');
    setAmount1(value);
    convertCurrency(value, currency1, currency2);
  };

  const handleAmount2Change = (e) => {
    const value = e.target.value.replace(/[^0-9,]/g, '');
    setAmount2(value);
    const usdValue = parseNumber(value) / parseFloat(rates[currency2]);
    const convertedValue = usdValue * parseFloat(rates[currency1]);
    setAmount1(formatNumber(convertedValue));
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
        {error && <p className="error">{error}</p>}
      </div>
      <div className="input-group">
        <input type="text" value={amount1} onChange={handleAmount1Change} />
        <select value={currency1} onChange={handleCurrency1Change}>
          {Object.keys(rates).map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <input type="text" value={amount2} onChange={handleAmount2Change} />
        <select value={currency2} onChange={handleCurrency2Change}>
          {Object.keys(rates).map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
      <p className="exchange-rate">{exchangeRate}</p>
    </div>
  );
};

render(<CurrencyConverter />, document.getElementById('app'));