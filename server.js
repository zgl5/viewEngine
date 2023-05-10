// Load express into out web app
const express = require('express')
const app = express()


const cars= require('./models/cars')
const fruits = require('./models/fruits')
const states= require('./models/states')

// Instatiate our express


app.set('view engine', 'jsx');
  app.engine('jsx', require('jsx-view-engine').createEngine()
  );

  app.get('/', (req, res) => {
    let message =  '<div style="font-family: Arial; font-size: 16px; font-style: oblique; color: blue; line-height: 1.6">' + 'You can find information on the links: <br> <br> cars : <a href="/cars">Link to cars </a> <br> <br>fruits : <a href="/fruits">Link to fruits</a> <br> <br> states : <a href="/states">Link to states</a> <br>'
    res.send(message);
});


  // cars
  app.get('/cars', function(req, res){
    res.render('IndexCar', { cars: cars });
}); 

app.get('/cars/:indexOfCarsArray', function(req, res){
   res.render('ShowCar', { //second param must be an object   
    car: cars[req.params.indexOfCarsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
}); 

 app.get('/cars/:indexOfCarsArray', (req, res) => {
    res.send(fruits[req.params.indexOfCarsArray]);
});

  //fruits
  app.get('/fruits', function(req, res){
    res.render('Index', { fruits: fruits });
}); 

app.get('/fruits/:indexOfFruitsArray', function(req, res){
   res.render('Show', { //second param must be an object   
    fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
  });
}); 

 app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});


// states
app.get('/states', function(req, res){
    res.render('IndexState', { states: states});
}); 

app.get('/states/:indexOfStatesArray', function(req, res){
    res.render('ShowState', { //second param must be an object   
     state: states[req.params.indexOfStatesArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
   });
 }); 
 
  app.get('/states/:indexOfStatesArray', (req, res) => {
     res.send(states[req.params.indexOfStatesArray]);
 });



/*

app.get('/', (req, res) => {
    res.render('template', { 
        title: 'Home', 
        message: 'Hello there!', 
        content: 'You can find information on the links: <br> <br> cars : <a href="/cars">Link to cars </a> <br> <br>fruits : <a href="/fruits">Link to fruits</a> <br> <br> vegetables : <a href="/vegetables">Link to vegetables</a>' 
    });
});
  
  app.get('/cars', (req, res) => {
    res.render('template', { title: 'Cars', message: 'Check some cars!', content: cars })
  })
  
  app.get('/fruits', (req, res) => {
    res.render('template', { title: 'Fruits', message: 'Check some fruits!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
  })

  app.get('/vegetables', (req, res) => {
    res.render('template', { title: 'Vegetables', message: 'Check some vegetables!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
  })
*/
// Tell express app to listen
app.listen(3004, ()=>{
    console.log('Listening on port 3004')
})