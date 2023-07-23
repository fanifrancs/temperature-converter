import React, { useState } from 'react';

export default function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    function handleCelsiusChange(e) {
        const value = e.target.value;
        setCelsius(value);
        setFahrenheit((parseFloat(value) * 9 / 5 + 32).toFixed(2));
    }

    function handleFahrenheitChange(e) {
        const value = e.target.value;
        setFahrenheit(value);
        setCelsius(((parseFloat(value) - 32) * 5 / 9).toFixed(2));
    }

    return (
        <div className='container'>
            <h1>Temperature Converter</h1>
            <label><p>Temperature in Celsius:</p></label>
            <br />
            <input
                type="number"
                value={celsius}
                onChange={handleCelsiusChange}
            />
            <label><p>Temperature in Fahrenheit:</p></label>
            <br />
            <input
                type="number"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
            />
        </div>
    )
}
