window.addEventListener("load", () => {
  const logOutput = document.getElementById("logOutput");
  const timestamp = new Date().toLocaleString();
  const userAgent = navigator.userAgent;
  let logEntry = `Accessed on: ${timestamp} | Browser: ${userAgent}`;

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(5);
        const lng = position.coords.longitude.toFixed(5);
        logEntry += ` | Location: ${lat}, ${lng}`;
        logOutput.innerHTML += `<li>${logEntry}</li>`;
      },
      () => {
        logEntry += ` | Location: permission denied`;
        logOutput.innerHTML += `<li>${logEntry}</li>`;
      }
    );
  } else {
    logEntry += ` | Location: not supported`;
    logOutput.innerHTML += `<li>${logEntry}</li>`;
  }
});

// // const logOutput = document.getElementById("logOutput");
// // const timestamp = new Date().toLocaleString();
// // const userAgent = navigator.userAgent;
// // let logEntry = `Accessed on: ${timestamp} | Browser: ${userAgent}`;

// // if ("geolocation" in navigator) {
// //   navigator.geolocation.getCurrentPosition(
// //     (position) => {
// //       const lat = position.coords.latitude.toFixed(5);
// //       const lng = position.coords.longitude.toFixed(5);
// //       logEntry += ` | Location: ${lat}, ${lng}`;
// //       logOutput.innerHTML += `<li>${logEntry}</li>`;
// //     },
// //     () => {
// //       logEntry += ` | Location: permission denied`;
// //       logOutput.innerHTML += `<li>${logEntry}</li>`;
// //     }
// //   );
// // } else {
// //   logEntry += ` | Location: not supported`;
// //   logOutput.innerHTML += `<li>${logEntry}</li>`;
// // }

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
