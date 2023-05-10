//require at the top
const React = require('react')

//conponent... This one is a class component


class Show extends React.Component {
  render () {
   const fruit = this.props.fruit
    return (
      <div style={{ fontSize: '20px', color: 'green', lineHeight: '50px'}}>
      <h1> Show Page </h1>
        The {fruit.name} is {fruit.color} . <br></br><br></br>
        There is {fruit.calories} cal. each 100gr. 
      </div>
      );
     }
   }
   
  module.exports  = Show;

  