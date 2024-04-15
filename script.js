// Area Of Trapezoid Calculator

// Hide the checkmarks
document.getElementById("checkmark-top").style.visibility = "hidden";
document.getElementById("checkmark-bottom").style.visibility = "hidden";
document.getElementById("checkmark-height").style.visibility = "hidden";
document.getElementById("checkmark-decimal").style.visibility = "hidden";

// Event Listener
document.getElementById("btn").addEventListener("click", calcArea);

// Event Function
function calcArea() {
  // Input
  var topBase = +document.getElementById("top-base-in").value;
  let bottomBase = +document.getElementById("bottom-base-in").value;
  let height = +document.getElementById("height-in").value;
  let decimalPlaces = document.getElementById("decimal-places-in").value;
  // Process
  var sumOfBases = topBase + bottomBase;
  var trapezoidArea = (sumOfBases / 2) * height;
  document.getElementById("top-base-in").value = "";
  document.getElementById("bottom-base-in").value = "";
  document.getElementById("height-in").value = "";
  document.getElementById("decimal-places-in").value = "";
  var trapezoidArea = trapezoidArea.toFixed(decimalPlaces);
  // Output
  document.getElementById("area-out").innerHTML = trapezoidArea;
  document.getElementById("checkmark-top").style.visibility = "visible";
  document.getElementById("checkmark-bottom").style.visibility = "visible";
  document.getElementById("checkmark-height").style.visibility = "visible";
  document.getElementById("checkmark-decimal").style.visibility = "visible";
}
