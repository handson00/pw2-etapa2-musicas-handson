# API de Músicas e Artistas

Trabalho da Etapa II de Programação Web II (IFMA Campus Coelho Neto).

É uma API feita com Node.js e Express onde dá para cadastrar artistas e as músicas de cada artista. Não tem login e os dados ficam guardados em arrays, então quando o servidor reinicia tudo volta ao começo.

## Como rodar

```
npm install
npm start
```

Depois é só abrir `http://localhost:3000`. Se quiser mudar a porta, copie o arquivo `.env.example` para `.env` e troque o valor de PORT.

## Como funciona

Tem dois recursos:

- **Artista**: id, nome e pais
- **Música**: id, titulo, ano e artistaId

O `artistaId` da música é o id de um artista que já existe. Se o artista não existir, a API devolve erro 400.

A API já começa com 3 artistas e 6 músicas para facilitar os testes.

## Rotas

Artista:

- GET /artista (lista todos)
- GET /artista/:id (busca um)
- POST /artista (cadastra)
- PUT /artista/:id (atualiza)
- DELETE /artista/:id (apaga, mas não deixa se o artista ainda tiver músicas)
- GET /artista/:id/musicas (lista as músicas daquele artista)

Música:

- GET /musica (lista todas)
- GET /musica?ano=2021 (filtra pelo ano)
- GET /musica/:id (busca uma)
- POST /musica (cadastra)
- PUT /musica/:id (atualiza)
- DELETE /musica/:id (apaga)

## Exemplos de envio

Cadastrar artista:

```
POST /artista
{
    "nome": "Ivete Sangalo",
    "pais": "Brasil"
}
```

Cadastrar música:

```
POST /musica
{
    "titulo": "Show das Poderosas",
    "ano": 2013,
    "artistaId": 1
}
```

## Códigos de resposta

- 200: deu certo (buscar, atualizar e apagar)
- 201: cadastrado com sucesso
- 400: dado faltando ou inválido
- 404: não encontrou o artista, a música ou a rota

Os erros sempre vêm em JSON, assim: `{ "message": "..." }`

## Pastas

- `routes`: liga cada rota ao controller
- `controllers`: recebe o pedido, valida e responde
- `models`: guarda os dados e mexe nos arrays
- `helpers`: funções de validação

## Testes

O arquivo `requests.http` tem um pedido para cada rota, inclusive os de erro. Para usar, instale a extensão REST Client no VS Code, abra o arquivo e clique em "Send Request".
