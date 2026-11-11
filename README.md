# API de Músicas e Artistas

Trabalho da Etapa II de Programação Web II (IFMA Campus Coelho Neto).

API REST feita com Node.js e Express para cadastrar artistas e as músicas de cada um. Não tem autenticação e os dados ficam guardados em arrays na memória, então voltam ao começo quando o servidor reinicia.

## Como rodar

```
npm install
npm start
```

O servidor sobe em `http://localhost:3000`. Para mudar a porta, copie o `.env.example` para `.env` e altere o valor de `PORT`.

## Recursos

**Artista**

| Campo | Tipo | Observação |
|---|---|---|
| id | número | gerado pela API |
| nome | texto | obrigatório |
| pais | texto | obrigatório |

**Música**

| Campo | Tipo | Observação |
|---|---|---|
| id | número | gerado pela API |
| titulo | texto | obrigatório |
| ano | número | obrigatório |
| artistaId | número | obrigatório, o artista precisa existir |

Um artista pode ter várias músicas, e cada música pertence a um artista (`artistaId`).

A API já começa com 3 artistas e 6 músicas cadastrados.

## Rotas

**Artista**

| Método | Rota | O que faz |
|---|---|---|
| GET | /artista | lista todos os artistas |
| GET | /artista/:id | busca um artista pelo id |
| POST | /artista | cadastra um artista |
| PUT | /artista/:id | atualiza um artista |
| DELETE | /artista/:id | remove um artista (não pode se ele tiver músicas) |
| GET | /artista/:id/musicas | lista as músicas de um artista |

**Música**

| Método | Rota | O que faz |
|---|---|---|
| GET | /musica | lista todas as músicas |
| GET | /musica?ano=1982 | filtra as músicas por ano |
| GET | /musica/:id | busca uma música pelo id |
| POST | /musica | cadastra uma música |
| PUT | /musica/:id | atualiza uma música |
| DELETE | /musica/:id | remove uma música |

## Exemplos

Cadastrar um artista:

```
POST /artista
{
    "nome": "Djavan",
    "pais": "Brasil"
}
```

Cadastrar uma música:

```
POST /musica
{
    "titulo": "Thriller",
    "ano": 1982,
    "artistaId": 3
}
```

## Status HTTP

| Código | Quando |
|---|---|
| 200 | consulta, atualização e exclusão com sucesso |
| 201 | cadastro com sucesso |
| 400 | dado inválido ou faltando, id inválido, artistaId que não existe |
| 404 | artista, música ou rota não encontrada |

As mensagens de erro vêm em JSON, no formato `{ "message": "..." }`.

## Estrutura

```
index.js          inicia o servidor e registra as rotas
routes/           liga cada URL a um método do controller
controllers/      recebe a requisição, valida e responde
models/           guarda os dados nos arrays e faz as operações
helpers/          funções de validação reaproveitadas
requests.http     requisições para testar as rotas
```

## Testando

O arquivo `requests.http` tem uma requisição para cada rota, incluindo casos de erro. Para usar, instale a extensão REST Client no VS Code, abra o arquivo e clique em "Send Request" acima de cada requisição.
