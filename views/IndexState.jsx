const React = require('react');

class IndexState extends React.Component {
  render() {
      const { states } = this.props;
      return (
        <div style={{ fontSize: '18px', color: 'red', lineHeight: '40px'}}>
                  <h1>States Information</h1>
                  <ul>
                      {states.map((state, i) => {
                          return (
                              <li>
                                  The capital of the state of {' '}
                                  <a href={`/states/${i}`}>
                                      {state.name} 
                                  </a>{' '} is {state.capital}.
                                    <br></br>
                                  
                                    The population of capital is {state.populationOfCapital}. <br></br>
                                  <br />
                              </li>
                          );
                      })}
                  </ul>
              </div>
      );
  }
}
module.exports = IndexState