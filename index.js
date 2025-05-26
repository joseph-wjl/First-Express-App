const express = require('express');
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send("Hi")
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})

// app.set('view engine', )

// app.use((req, res) => {
//     console.log("we got a new request")
//     // res.send('<h1>This is my homepage!</h1>')
// })

// app.get('/r/:subreddit/:postID', (req, res) => {
//     const { subreddit, postID } = req.params
//     res.send(`Viewing post:${postID} of the ${subreddit} subreddit!`)
// })

// app.get('/search', (req, res) => {
//     const { q } = req.query;
//     if (!q) {
//         res.send('Nothing found if nothing searched!')
//     }
//     res.send(`<h1>Search results for: ${q}</h1>`)
// })

// app.get('/cats', (req, res) => {
//     res.send('Meow!')
// })

// app.get(/(.*)/, (req, res) => {
//     res.send(`Path not found!`)
// })

// app.listen(3000, () => {
//     console.log('listening on port 3000')
// })

