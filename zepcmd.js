const { exec } = require('child_process');

function runScript(script, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Ejecutando ${script}...`);
      exec(`node ${script}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error en ${script}:`, error);
          reject(error);
          return;
        }
        console.log(stdout);
        resolve();
      });
    }, delay);
  });
}

async function main() {
  try {
    await runScript('zep1.js', 0);
    await runScript('zep2.js', 2000);
    await runScript('zep3.js', 2000);
  } catch (err) {
    console.error('Error general:', err);
  }
}

main();