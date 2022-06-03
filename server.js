const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 Savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the Rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'nas': {
        'age': 48,
        'birthName': 'Nasir bin Olu Dara Jones',
        'birthLocation': 'New York City, U.S.'
    },
    'drake': {
        'age': 35,
        'birthName': 'Aubrey Drake Graham',
        'birthLocation': 'Toronto, Canada'
    },
    'eminem': {
        'age': 49,
        'birthName': 'Marshall Bruce Mathers III',
        'birthLocation': 'St. Joseph, Missouri'
    },
    'nelly': {
        'age': 47,
        'birthName': 'Cornell Iral Haynes Jr.',
        'birthLocation': 'Austin, TX'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})