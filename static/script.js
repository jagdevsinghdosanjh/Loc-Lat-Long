document.getElementById("getLocationBtn").addEventListener("click", () => {
  const output = document.getElementById("output");

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        output.textContent = `Latitude: ${latitude.toFixed(5)}, Longitude: ${longitude.toFixed(5)}`;
      },
      (error) => {
        output.textContent = `Error: ${error.message}`;
      }
    );
  } else {
    output.textContent = "Geolocation is not supported by your browser.";
  }
});
