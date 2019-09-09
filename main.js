//Load Express
const express = require('express');

//Look for PORT
const PORT = parseInt(process.argv[2] || process.env.APP_PORT) || 3000;

//Create an instance of the application
const app = express();

app.use(
    express.static(__dirname + '/public/dashboard')
);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/api/processing', (req, resp)=>{
    db_serving = [ {
        "id": "Q1"
      }, 
      {
        "id": "Q2"
      },
      {
        "id": "Q3"
      },
      {
        "id": "Q4"
      }, 
      {
        "id": "Q5"
      },
      {
        "id": "Q6"
      }
    ]
    resp.status(200)
    resp.type('application/json')
    resp.json(db_serving)
})

app.get('/api/collection', (req, resp)=>{
    db_collection = [ {
        "id": "*Q12"
      },
      {
        "id": "*Q11"
      },
      {
        "id": "*Q10"
      }, 
      {
        "id": "*Q9"
      },
      {
        "id": "*Q8"
      },
      {
        "id": "*Q7"
      },
      {
        "id": "*Q6"
      },
      {
        "id": "*Q5"
      },
      {
        "id": "*Q4"
      },
      {
        "id": "*Q3"
      },
      {
        "id": "*Q2"
      }
    ]
    resp.status(200)
    resp.type('application/json')
    resp.json(db_collection)
})


app.listen(PORT, 
    () => {
        console.info(`Application has started on ${PORT} at ${new Date()}`);
    }
)