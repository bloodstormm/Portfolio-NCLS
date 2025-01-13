import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
// Mapeamento de cores
const colorMap = {
    'accent': 'primary',
    'darkAccent': 'secondary',
    'darkerAccent': 'tertiary',
    'lighterAccent': 'highlight',
    'darkBrown': 'brown',
    'lightBrown': 'beige',
    'whity': 'offWhite',
    'darky': 'background'
};

// Função para substituir cores no conteúdo
function replaceColorsInFile(filePath) {
    let content = readFileSync(filePath, 'utf8');

    Object.entries(colorMap).forEach(([oldColor, newColor]) => {
        const regex = new RegExp(`\\b${oldColor}\\b`, 'g');
        content = content.replace(regex, newColor);
    });

    writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Substituído com sucesso: ${filePath}`);
}

// Função para percorrer diretório
function processDirectory(directory) {
    readdirSync(directory).forEach(file => {
        const fullPath = join(directory, file);

        if (statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith(".css")) {
            replaceColorsInFile(fullPath);
        }
    });
}

// Obter o diretório atual
const __dirname = dirname(fileURLToPath(import.meta.url));

// Usar o join para formar o caminho correto
const rootFolder = join(__dirname, 'src');


// Defina o caminho da pasta raiz do projeto (exemplo: 'src')
processDirectory(rootFolder);
console.log('🎉 Substituição concluída!');
