var api = "http://api.fixer.io/latest";
var from = "USD";
var to = "ILS";
var amount = 0;

document.addEventListener('DOMContentLoaded', function() {
  var total = document.getElementById('total');
  var button = document.getElementById('generate');


  // Function to write data into our DOM Elements
  function setDataToDOM(data) {
    total.innerHTML = data.rates[to]*amount;
  }

  // Get starting quote
  //getQuoteFromAPI(setDataToDOM);

  // Get quote on click
  button.addEventListener('click', function() {
    from = document.getElementById('fCurList').value;
    to = document.getElementById('tCurList').value;
    amount = document.getElementById('amount').value;
    getQuoteFromAPI(setDataToDOM);
  });
});

// Function to generate new quote via fetch()
function getQuoteFromAPI(callback) {
  var newApi = api + "?base=" + from;
  fetch(newApi)
    .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Validate data is correct and in the right format
        // ...
        callback(data);
      })
     // Error Handling
    .catch(function(error) {
      console.log(error);
    });
}
