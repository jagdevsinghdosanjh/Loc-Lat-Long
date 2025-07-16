window.addEventListener("load", () => {
  const logOutput = document.getElementById("logOutput");
  const timestamp = new Date().toLocaleString();
  const userAgent = navigator.userAgent;

  let logEntry = `⏰ Accessed on: ${timestamp} | 🖥️ Browser: ${userAgent}`;

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(5);
        const lng = position.coords.longitude.toFixed(5);
        logEntry += ` | 📍 Location: ${lat}, ${lng}`;
        logOutput.innerHTML += `<li>${logEntry}</li>`;
      },
      () => {
        logEntry += ` | 📍 Location: permission denied`;
        logOutput.innerHTML += `<li>${logEntry}</li>`;
      }
    );
  } else {
    logEntry += ` | 📍 Location: not supported`;
    logOutput.innerHTML += `<li>${logEntry}</li>`;
  }
});




// window.addEventListener("load", () => {
//   const logOutput = document.getElementById("logOutput");
//   if (!logOutput) return;

//   const timestamp = new Date().toLocaleString();
//   const userAgent = navigator.userAgent;

//   let logEntry = `⏰ Accessed on: ${timestamp} | 🖥️ Browser: ${userAgent}`;

//   if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const lat = position.coords.latitude.toFixed(5);
//         const lng = position.coords.longitude.toFixed(5);
//         logEntry += ` | 📍 Location: ${lat}, ${lng}`;
//         appendLog(logEntry);
//       },
//       () => {
//         logEntry += ` | 📍 Location: permission denied`;
//         appendLog(logEntry);
//       }
//     );
//   } else {
//     logEntry += ` | 📍 Location: not supported`;
//     appendLog(logEntry);
//   }

//   function appendLog(entry) {
//     const li = document.createElement("li");
//     li.textContent = entry;
//     logOutput.appendChild(li);
//   }
// });




// // window.addEventListener("load", () => {
// //   const logOutput = document.getElementById("logOutput");
// //   const timestamp = new Date().toLocaleString();
// //   const userAgent = navigator.userAgent;
// //   let logEntry = `Accessed on: ${timestamp} | Browser: ${userAgent}`;

// //   if ("geolocation" in navigator) {
// //     navigator.geolocation.getCurrentPosition(
// //       (position) => {
// //         const lat = position.coords.latitude.toFixed(5);
// //         const lng = position.coords.longitude.toFixed(5);
// //         logEntry += ` | Location: ${lat}, ${lng}`;
// //         logOutput.innerHTML += `<li>${logEntry}</li>`;
// //       },
// //       () => {
// //         logEntry += ` | Location: permission denied`;
// //         logOutput.innerHTML += `<li>${logEntry}</li>`;
// //       }
// //     );
// //   } else {
// //     logEntry += ` | Location: not supported`;
// //     logOutput.innerHTML += `<li>${logEntry}</li>`;
// //   }
// // });

// // // // const logOutput = document.getElementById("logOutput");
// // // // const timestamp = new Date().toLocaleString();
// // // // const userAgent = navigator.userAgent;
// // // // let logEntry = `Accessed on: ${timestamp} | Browser: ${userAgent}`;

// // // // if ("geolocation" in navigator) {
// // // //   navigator.geolocation.getCurrentPosition(
// // // //     (position) => {
// // // //       const lat = position.coords.latitude.toFixed(5);
// // // //       const lng = position.coords.longitude.toFixed(5);
// // // //       logEntry += ` | Location: ${lat}, ${lng}`;
// // // //       logOutput.innerHTML += `<li>${logEntry}</li>`;
// // // //     },
// // // //     () => {
// // // //       logEntry += ` | Location: permission denied`;
// // // //       logOutput.innerHTML += `<li>${logEntry}</li>`;
// // // //     }
// // // //   );
// // // // } else {
// // // //   logEntry += ` | Location: not supported`;
// // // //   logOutput.innerHTML += `<li>${logEntry}</li>`;
// // // // }

// // // window.addEventListener("load", () => {
// // //   const logOutput = document.getElementById("logOutput");
// // //   const timestamp = new Date().toLocaleString();
// // //   const userAgent = navigator.userAgent;

// // //   let logEntry = `⏰ Accessed on: ${timestamp} | 🖥️ Browser: ${userAgent}`;

// // //   if ("geolocation" in navigator) {
// // //     navigator.geolocation.getCurrentPosition(
// // //       (position) => {
// // //         const lat = position.coords.latitude.toFixed(5);
// // //         const lng = position.coords.longitude.toFixed(5);
// // //         logEntry += ` | 📍 Location: ${lat}, ${lng}`;
// // //         logOutput.innerHTML += `<li>${logEntry}</li>`;
// // //       },
// // //       () => {
// // //         logEntry += ` | 📍 Location: permission denied`;
// // //         logOutput.innerHTML += `<li>${logEntry}</li>`;
// // //       }
// // //     );
// // //   } else {
// // //     logEntry += ` | 📍 Location: not supported`;
// // //     logOutput.innerHTML += `<li>${logEntry}</li>`;
// // //   }
// // // });
