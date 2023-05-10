//require at the top
const React = require('react')

//conponent... This one is a class component


class ShowState extends React.Component {
  render () {
   const state = this.props.state
    return (
      <div style={{ fontSize: '20px', color: 'red', lineHeight: '50px'}}>
      <h1> Show Page </h1>
      The capital of the state of {' '} {state.name} is {state.capital}. <br></br>            
      The population of capital is {state.populationOfCapital}. <br></br>
      </div>
      );
     }
   }
   
  module.exports  = ShowState;

  