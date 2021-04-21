// shellexec.js <> Code
// Javascript Expansion Module
// Copyright © 2021 vlT - vl.TECH di Veronesi Lorenzo
//******************************************************************************
// Modulo che consente di eseguire comandi dalla shell di sistema
// scrittto in puro js.
//
// es. di utilizzo:
//         shellexec(comando)
//         .then((output) => {console.log(output);})
//******************************************************************************

// <editor-fold> Costanti e Varibili del Modulo
const exec = require('child_process').exec
// </editor-fold>

// <editor-fold> Funzione del Modulo
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

// <editor-fold> export del modulo
module.exports = shellexec;
// </editor-fold>
