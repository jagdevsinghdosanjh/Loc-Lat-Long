window.addEventListener("load", () => {
  const logOutput = document.getElementById("logOutput");

  // Fetch existing logs from backend
  fetch("http://localhost:8000/get-access-logs")
    .then((response) => response.json())
    .then((logs) => {
      logs.forEach((log) => {
        const li = document.createElement("li");
        li.textContent = `⏰ ${log.timestamp} | 🖥️ ${log.agent} | 📍 ${log.location}`;
        logOutput.appendChild(li);
      });
    })
    .catch((err) => {
      console.error("Failed to load access logs:", err);
    });

  // Existing geolocation and logging logic...
});

// window.addEventListener("load", () => {
//   const logOutput = document.getElementById("logOutput");
//   const timestamp = new Date().toLocaleString();
//   const userAgent = navigator.userAgent;

//   let logEntry = `⏰ Accessed on: ${timestamp} | 🖥️ Browser: ${userAgent}`;

//   if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const lat = position.coords.latitude.toFixed(5);
//         const lng = position.coords.longitude.toFixed(5);
//         logEntry += ` | 📍 Location: ${lat}, ${lng}`;
//         logOutput.innerHTML += `<li>${logEntry}</li>`;
//       },
//       () => {
//         logEntry += ` | 📍 Location: permission denied`;
//         logOutput.innerHTML += `<li>${logEntry}</li>`;
//       }
//     );
//   } else {
//     logEntry += ` | 📍 Location: not supported`;
//     logOutput.innerHTML += `<li>${logEntry}</li>`;
//   }
// });


