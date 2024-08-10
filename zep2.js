// USO: node zep2
//
// Una vez ejecutado zep1 y obtener un JSON valido, este codigo transformará su contenido dentro de una
// función valida para la lectura de Zeppelin y pueda así, utilizarse dentro del servidor con el comando !docs

const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'metadata_zep.json');
const outputPath = path.join(__dirname, 'zep.txt');

const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

function generarCondicionales(data) {
    let condicional = '';

    data.forEach((item, index) => {
        const { ruta, clave } = item;

        const partes = clave.split(' ');
        if (partes.length > 1) {
            const [palabra1, ...resto] = partes;
            const palabra2 = resto.join(' ');

            if (index === 0) {
                condicional += `if(and(eq(args.0, "${palabra1}"), eq(args.1, "${palabra2}")), "${ruta}"`;
            } else {
                condicional += `, if(and(eq(args.0, "${palabra1}"), eq(args.1, "${palabra2}")), "${ruta}"`;
            }
        } else {
            if (index === 0) {
                condicional += `if(eq(args.0, "${clave}"), "${ruta}"`;
            } else {
                condicional += `, if(eq(args.0, "${clave}"), "${ruta}"`;
            }
        }
    });

    condicional += `, if(eq(args.0, "ayuda"), ""`;

    condicional += ')'.repeat(jsonData.length + 1);

    return condicional;
}

const condicionales = generarCondicionales(jsonData);

const resultado = `!tag docs {concat("https://docs.dprojects.org/guias/", ${condicionales})}`;

fs.writeFileSync(outputPath, resultado, 'utf-8');

console.log(`Archivo generado: ${outputPath}`);
