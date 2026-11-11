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

app.use((req, res) => {
    return res.status(404).json({message: 'Essa rota não existe'})
})

app.use((erro, req, res, next) => {
    if(erro.status === 400)
        return res.status(400).json({message: 'JSON mal escrito'})
    return res.status(500).json({message: 'Deu erro no servidor'})
})

app.listen(PORTA, () => console.log('Servidor rodando na porta ' + PORTA))
