// npmreinit.js <> Code
// Javascript Expansion Module
// ver: 0r1-18022021
// Copyright © 2021 vlT - vl.TECH di Veronesi Lorenzo
//******************************************************************************

// <editor-fold> Costanti e Varibili del Modulo
const exec = require('child_process').exec
const fs = require('fs');
const os = require('os');
const platfrom = os.platform();
const userHome = os.homedir();
let npmPath
// </editor-fold>

// <editor-fold> Funzioni modulo integrate
//> shellexec
async function shellexec(comando) {
  return new Promise(function(resolve) {
    exec(comando, function(error, stdout, stderr) {
      if (error !== null) {
        console.log('shellexec: ' + error);
      }
      resolve(stdout)
    });
  });
}
// </editor-fold>

// <editor-fold> Funzione del Modulo
async function npmreinit() {
  switch (platfrom) {
    case "win32":
      npmPath = userHome + "\\Appdata\\Roaming\\npm"
      break;
    default:
  }
  if (fs.existsSync(npmPath)) {
    console.log("");
    console.log("Eliminazione della cartella npm");
    fs.rmdirSync(npmPath, {
      recursive: true
    });
    console.log("");
    console.log("Installazione dei pacchetti npm -> npm@latest/nexe/electron ");
    shellexec("npm install -g npm@latest nexe electron")
      .then((output) => {
        console.log(output);
        console.log("");
        console.log("npmreinit.js -> COMPLETATO CORRETTAMENTE");
      })
  }
}
// </editor-fold>

// <editor-fold> export del modulo
module.exports = npmreinit;
// </editor-fold>
