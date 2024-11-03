const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const porta = 3000;

// Middleware para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para exibir o formulário
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Formulário</title>
            <style>
                /* Adicione aqui estilos CSS opcionais para o formulário */
                body { font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; }
                .b { font-weight: bold; }
                .A { width: 100%; padding: 8px; margin-bottom: 10px; }
            </style>
        </head>
        <body>
            <h1>Cadastro</h1>
            <form action="/submit" method="POST">
                <label for="nome" class="b">Nome:</label><br>
                <input name="nome" class="A" type="text" placeholder="Informe o Nome" required><br>

                <label for="cpf" class="b">CPF:</label><br>
                <input name="cpf" class="A" type="text" placeholder="ex: 123.456.789-00" required><br>

                <label for="nascimento" class="b">Nascimento:</label><br>
                <input name="nascimento" class="A" type="date" required><br>

                <label for="mae" class="b">Nome da mãe:</label><br>
                <input name="mae" class="A" type="text" placeholder="Informe o Nome"><br>

                <label for="telefone" class="b">Telefone:</label><br>
                <input name="telefone" class="A" type="text" placeholder="(99) 99999-9999"><br>

                <label for="email" class="b">E-mail:</label><br>
                <input name="email" class="A" type="email" placeholder="email@example.com" required><br>

                <label for="foto" class="b">Foto:</label><br>
                <input name="foto" class="A" type="file"><br>

                <h3>Outros</h3>
                <label class="b" for="escola">Formação Escolar:</label><br>
                <select name="escola" class="A">
                    <option value="Ensino Fundamental">Ensino Fundamental</option>
                    <option value="Ensino Médio">Ensino Médio</option>
                    <option value="Ensino Superior">Ensino Superior</option>
                    <option value="Pós-graduação">Pós-graduação</option>
                </select><br>

                <label class="b" for="turno">Turno:</label><br>
                <select name="turno" class="A">
                    <option value="Matutino">Matutino</option>
                    <option value="Integral">Integral</option>
                    <option value="Noturno">Noturno</option>
                    <option value="Vespertino">Vespertino</option>
                </select><br>

                <label class="b">Observações:</label><br>
                <textarea name="observacoes" rows="4" class="A" placeholder="Digite aqui"></textarea><br>

                <button type="reset">Limpar</button>
                <button type="submit">Gravar</button>
            </form>
        </body>
        </html>
    `);
});

// Rota para processar o formulário
app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log('Dados recebidos do formulário:', formData);

    res.send('<h1>Formulário enviado com sucesso!</h1><p>Dados recebidos no servidor.</p>');
});

// Iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});
