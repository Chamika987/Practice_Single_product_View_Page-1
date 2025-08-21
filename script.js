function pay() {
  alert("...Processing...");
  document.getElementById("pN").disabled = true;
  document.getElementById("pN").innerHTML = "Paid";
  document.getElementById("pN").style.backgroundColor = "Teal";
}

function cart() {
  alert("...Processing...");
  document.getElementById("aC").disabled = true;
  document.getElementById("aC").innerHTML = "View Your Cart";
  document.getElementById("aC").style.backgroundColor = "Coral";
}
