// USO: node zep3
//
// Una vez ejecutado zep1 y obtener un JSON valido, este codigo transformará su contenido dentro de una
// función valida para la lectura de Zeppelin y pueda así, utilizarse dentro de la dashboard y se
// visualizará su contenido usando !docs ayuda

const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'metadata_zep.json');
const outputPath = path.join(__dirname, 'zepDash.txt');

const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

const rutasAgrupadas = {};

jsonData.forEach(item => {
    const { ruta, clave } = item;
    const rutaInicial = ruta.split('/')[0].toUpperCase();

    if (!rutasAgrupadas[rutaInicial]) {
        rutasAgrupadas[rutaInicial] = [];
    }
    rutasAgrupadas[rutaInicial].push(clave);
});

let outputContent = '';

for (const rutaInicial in rutasAgrupadas) {
    outputContent += `                  - name: "${rutaInicial}"\n`;
    outputContent += `                    value: |\n`;
    rutasAgrupadas[rutaInicial].forEach(clave => {
        outputContent += `                      \`!docs ${clave}\`\n`;
    });
    outputContent += `                    inline: false\n\n`;
}

fs.writeFileSync(outputPath, outputContent.trim(), 'utf-8');

console.log(`Archivo generado: ${outputPath}`);
