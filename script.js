function volume_sphere(event) {
  // Prevent form from submitting and refreshing the page
  event.preventDefault();

  // Get the radius value from the input field
  const radiusInput = document.getElementById('radius');
  const volumeInput = document.getElementById('volume');
  const radius = parseFloat(radiusInput.value);

  // Validate the radius
  if (isNaN(radius) || radius < 0) {
    volumeInput.value = "NaN";
    return false;
  }

  // Calculate the volume: (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round to 4 decimal places and display it
  volumeInput.value = volume.toFixed(4);

  return false;
}

// Attach the function to form submission
window.onload = function () {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
