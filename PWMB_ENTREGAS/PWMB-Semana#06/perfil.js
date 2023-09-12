var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var email = urlParams.get('email');

document.getElementById("email").textContent = email;
