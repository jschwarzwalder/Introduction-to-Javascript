//1

var request = new XMLHttpRequest();

//2
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    document.getElementById("footer").innerHTML = request.responseText;
  }
};

//3
request.open('GET', 'footer.html');

//4
request.send();