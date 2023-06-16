const express = require('express')
const { getPosts, agregarPost } = require('./consultas')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/posts', async (req, res) => {
    const result = await getPosts()
    res.json(result)
})

app.post('/posts', async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body 
    const result = await agregarPost(titulo, img, descripcion, likes) 
    res.send("Post agregado con éxito")
})

app.listen(PORT, (req, res) => {
    console.log(`Server listening on port ${PORT}`);
})