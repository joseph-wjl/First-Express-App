const express = require('express');
const app = express()

// app.use((req, res) => {
//     console.log("we got a new request")
//     // res.send('<h1>This is my homepage!</h1>')
// })

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    // const subreddit = req.params.subreddit
    res.send(`Browsing the ${subreddit} subreddit!`)
})

app.get('/cats', (req, res) => {
    res.send('Meow!')
})

app.get(/(.*)/, (req, res) => {
    res.send(`Path not found!`)
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})

