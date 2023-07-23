function convertTemperature() {
  var temperature = parseFloat(document.getElementById("temperature").value);
  var unit = document.getElementById("unit").value;
  var result = document.getElementById("result");

  if (isNaN(temperature)) {
    result.value = "Please enter a valid temperature.";
    return;
  }

  if (unit === "1") {
    var celsius = (temperature - 32) * 5 / 9;
    result.value = celsius.toFixed(2) + "°C.";
  } else if (unit === "2") {
    var fahrenheit = (temperature * 9 / 5) + 32;
    result.value = fahrenheit.toFixed(2) + "°F.";
  }
}
