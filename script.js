function convertToFahrenheit() {
    const celsiusInput = parseFloat(document.getElementById("celsiusInput").value);
    if (!isNaN(celsiusInput)) {
        const fahrenheitValue = (celsiusInput * 9 / 5) + 32;
        document.getElementById("fahrenheitInput").value = fahrenheitValue.toFixed(2);
        document.getElementById("result").innerText = `${celsiusInput.toFixed(2)}°C is ${fahrenheitValue.toFixed(2)}°F`;
    } else {
        document.getElementById("result").innerText = "Invalid input. Please enter a valid number.";
    }
}

function convertToCelsius() {
    const fahrenheitInput = parseFloat(document.getElementById("fahrenheitInput").value);
    if (!isNaN(fahrenheitInput)) {
        const celsiusValue = (parseFloat(fahrenheitInput) - 32) * (5 / 9);
        document.getElementById("celsiusInput").value = celsiusValue.toFixed(2);
        document.getElementById("result").innerText = `${fahrenheitInput.toFixed(2)}°F is ${celsiusValue.toFixed(2)}°C`;
    } else {
        document.getElementById("result").innerText = "Invalid input. Please enter a valid number.";
    }
}
