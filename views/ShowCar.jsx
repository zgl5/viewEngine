//require at the top
const React = require('react')

//conponent... This one is a class component


class ShowCar extends React.Component {
  render () {
   const car = this.props.car
   let old = 2023 - car.year
    return (
      <div style={{ fontSize: '20px', color: 'red', lineHeight: '40px'}}>
      <h1> Information</h1>
        The {car.model} made by {car.make} in {' '}
        {car.year}. <br></br><br></br>This car {old} years old now.
      </div>
      );
     }
   }
   
  module.exports  = ShowCar;

  