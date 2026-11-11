import express from 'express'
import 'dotenv/config'
const app = express()
const PORTA = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => res.send('Api Esta Online'))

import artista from './routes/artista.js'
app.use('/artista', artista)

import musica from './routes/musica.js'
app.use('/musica', musica)

app.listen(PORTA, () => console.log('Servidor rodando na porta ' + PORTA))
