const fs = require('fs');
const path = require('path');

const guiasPath = path.join(__dirname, 'docs', '.vitepress', 'dist', 'guias');

function buscarMetadataZep(htmlFilePath) {
    const content = fs.readFileSync(htmlFilePath, 'utf-8');
    const metaTagMatch = content.match(/<meta\s+name="zep"\s+content="([^"]*)"/);
    return metaTagMatch ? metaTagMatch[1] : null;
}

function explorarCarpetas(basePath, relativePath = '') {
    const elements = fs.readdirSync(basePath);
    const resultado = [];

    elements.forEach(element => {
        const fullPath = path.join(basePath, element);
        const relativeElementPath = path.join(relativePath, element);

        if (fs.statSync(fullPath).isDirectory()) {
            resultado.push(...explorarCarpetas(fullPath, relativeElementPath));
        } else if (path.extname(fullPath) === '.html') {
            const zepContent = buscarMetadataZep(fullPath);
            if (zepContent) {
                resultado.push({
                    ruta: path.join(relativePath, path.basename(element, '.html')).replace(/\\/g, '/'),
                    clave: zepContent
                });
            }
        }
    });

    return resultado;
}

if (fs.existsSync(guiasPath)) {
    const datosExtraidos = explorarCarpetas(guiasPath);

    const outputPath = path.join(__dirname, 'metadata_zep.json');

    fs.writeFileSync(outputPath, JSON.stringify(datosExtraidos, null, 2), 'utf-8');

    console.log(`Datos extraídos y guardados en: ${outputPath}`);
} else {
    console.error(`La ruta ${guiasPath} no existe.`);
}