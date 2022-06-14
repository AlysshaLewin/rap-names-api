const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 Savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
        'yearsActive': '2014 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/c/c1/21_Savage_2018.jpg'
    },
    'chance the Rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois',
        'yearsActive': '2011 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/0/03/Chance_the_Rapper_2018_February.png'
    },
    'nas': {
        'age': 48,
        'birthName': 'Nasir bin Olu Dara Jones',
        'birthLocation': 'New York City, U.S.',
        'yearsActive': '1991 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/1/18/Nas_July_2014_%28cropped%29.jpg'
    },
    'drake': {
        'age': 35,
        'birthName': 'Aubrey Drake Graham',
        'birthLocation': 'Toronto, Canada',
        'yearsActive': '2001 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/2/28/Drake_July_2016.jpg'
    },
    'eminem': {
        'age': 49,
        'birthName': 'Marshall Bruce Mathers III',
        'birthLocation': 'St. Joseph, Missouri',
        'yearsActive': '1988 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Eminem_-_Concert_for_Valor_in_Washington%2C_D.C._Nov._11%2C_2014_%282%29_%28Cropped%29.jpg'
    },
    'nelly': {
        'age': 47,
        'birthName': 'Cornell Iral Haynes Jr.',
        'birthLocation': 'Austin, Texas',
        'yearsActive': '1993 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/2/20/Cornell-Haynes-Jr_Nelly_2010-06-05_photoby_Adam-Bielawski.jpg'
    },
    'andre 3000': {
        'age': 47,
        'birthName': 'André Lauren Benjamin',
        'birthLocation': 'Atlanta, Georgia',
        'yearsActive': '1992 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/2/21/2014227233523_2014-08-15_Rock%27n%27Heim_-_Sven_-_1D_X_-_328_-_DV3P8951_mod.jpg'
    },
    'Lauryn Hill': {
        'age': 47,
        'birthName': 'Lauryn Noelle Hill',
        'birthLocation': 'Newark, New Jersey',
        'yearsActive': '1988 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Lauryn_Hill_Kongsberg_Jazzfestival_2019_%28221758%29_%28cropped%29.jpg'
    },
    'Kendrick Lamar': {
        'age': 34,
        'birthName': 'Kendrick Lamar Duckworth',
        'birthLocation': 'Compton, California',
        'yearsActive': '2003 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg'
    },
    'Snoop Dogg': {
        'age': 50,
        'birthName': 'Calvin Cordozar Broadus Jr.',
        'birthLocation': 'Long Beach, California',
        'yearsActive': '1990 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/1/17/Snoop_Dogg_2019_by_Glenn_Francis.jpg'
    },
    'LL Cool J': {
        'age': 54,
        'birthName': 'James Todd Smith',
        'birthLocation': 'Bay Shore, New York',
        'yearsActive': '1984 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/7/72/LL.COOL_J._1999.jpg'
    },
    'Ludacris': {
        'age': 44,
        'birthName': 'Christopher Brian Bridges',
        'birthLocation': 'Champaign, Illinois',
        'yearsActive': '1998 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Ludacris_2008_%28cropped%29.jpg'
    },
    'Method Man': {
        'age': 51,
        'birthName': 'Clifford Smith, Jr.',
        'birthLocation': 'Long Island, New York',
        'yearsActive': '1992 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Method_Man_at_Shattuck_Down_Low.jpg'
    },
    'Redman': {
        'age': 52,
        'birthName': 'Reginald Noble',
        'birthLocation': 'Newark, New Jersey',
        'yearsActive': '1990 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/e/e3/2016_Redman_%28cropped%29.jpg'
    },
    '50 Cent': {
        'age': 46,
        'birthName': 'Curtis James Jackson III',
        'birthLocation': 'New York City',
        'yearsActive': '1996 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/d/db/50_Cent_in_2018.png'
    },
    'Fabolous': {
        'age': 44,
        'birthName': 'John David Jackson',
        'birthLocation': 'New York City',
        'yearsActive': '1997 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/7/73/Fabolous_2019.jpg'
    },
    'Jadakiss': {
        'age': 47,
        'birthName': 'Jason Terrance Phillips',
        'birthLocation': 'Yonkers, New York',
        'yearsActive': '1994 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Jadakiss.jpg'
    },
    'J. Cole': {
        'age': 37,
        'birthName': 'Jermaine Lamarr Cole',
        'birthLocation': 'Frankfurt, West Germany',
        'yearsActive': '2007 to Present',
        'image': 'https://upload.wikimedia.org/wikipedia/commons/3/31/JCole2018.png'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'yearsActive': 'unknown'
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