require('dotenv').config()

const express = require('express'),
    massive = require('massive'),
    { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()



//serving static files from build
app.use(express.static(`${__dirname}/../build`));

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
})
    .then(db => {
        app.set('db', db)
        console.log('db connected')
    })

const server = app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))

//request-level middleware
const hasQuery = (req, res, next) => {
    const {name} = req.query
    if (name) {
        return next()
    }
    res.status(400).send('name query required at this endpoint')
}

//example endpoint using queries

app.get('/api/employees', hasQuery, async (req, res) => {
    const db = req.app.get('db')
    const { name } = req.query

    const [employee] = await db.employee.find({ name })
    return res.status(200).send(employee)
})