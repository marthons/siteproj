const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const XLSX = require('xlsx');
const path = require('path');

const app = express();
const port = 3000;

// Configurar o middleware para análise de corpos de solicitação
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para lidar com o envio do formulário
app.post('/submit', (req, res) => {
    // Obtenha os dados do formulário do corpo da solicitação
    const { nome, comum, cidade, cpf, setor, acessos } = req.body;

    // Criar objeto de dados para o arquivo Excel
    const data = [
        ["Nome Completo", "Comum", "Cidade", "CPF", "Setor", "Acessos Necessários"],
        [nome, comum, cidade, cpf, setor, acessos]
    ];

    // Converter dados para um objeto de workbook Excel
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Solicitação de Acesso");

    // Especifique o caminho onde você deseja salvar o arquivo
    const directoryPath = 'C:\\Projeto integrador 3\\siteproj\\siteproj';
    const fileName = `solicitacao_acesso_${Date.now()}.xlsx`;
    const filePath = path.join(directoryPath, fileName);

    // Escrever o arquivo Excel
    XLSX.writeFile(workbook, filePath, (err) => {
        if (err) {
            console.error('Erro ao salvar o arquivo Excel:', err);
            res.status(500).send('Erro ao salvar o arquivo Excel.');
        } else {
            console.log('Arquivo Excel salvo com sucesso:', filePath);
            res.json({ success: true, file: filePath });
        }
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`);
});
