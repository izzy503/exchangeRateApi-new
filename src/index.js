import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

window.addEventListener("load", function () {

  document.getElementById('converterForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    const resultDiv = document.getElementById('result');
    const API_ENDPOINT = `https://v6.exchangerate-api.com/v6/eb39b42be939f186c00fd722/latest/USD?access_key=${process.env.API_KEY}&symbols=${currency}`;

    fetch(API_ENDPOINT)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })

      .then(data => {
        if (data && data.rates && data.rates[currency]) {
          const convertedAmount = amount * data.rates[currency];
          resultDiv.textContent = `Converted Amount: ${convertedAmount} ${currency}`;
        } else {
          resultDiv.textContent = `The currency ${currency} doesn't exist.`;
        }
      })
      .catch(error => {
        resultDiv.textContent = `Error: ${error.message}`;
      });
  });

});
