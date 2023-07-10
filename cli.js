const { exec } = require("child_process");
const fs = require("fs");
const os = require("os");


// Function to Log Stuff
function logServer(logProcess) {
  // Log the output and error streams
  logProcess.stdout.on("data", (data) => {
    console.log(data);
  });

  logProcess.stderr.on("data", (data) => {
    console.error(data);
  });

  logProcess.on("exit", (code) => {
    console.log(`React server process exited with code ${code}`);
  });
}

// Function to start Flask Server
function startFlaskServer() {
    const flaskProcess = exec("python app.py", { cwd: "apiNew" });
    logServer(flaskProcess);
}

// Function to start React server
function startReactServer() {
    const reactProcess = exec("npm i && npm run dev", { cwd: "front-end" });
    logServer(reactProcess);
}
  
  // Function to start both servers
  function startServers() {
    startFlaskServer();
    startReactServer();
  }
  
  startServers();