const React = require('react');

class Index extends React.Component {
  render() {
      const { fruits } = this.props;
      return (
        <div style={{ lineHeight: '35px', color:'purple'}}>
                  <h1>Fruits Index Page</h1>
                  <ul>
                      {fruits.map((fruit, i) => {
                          return (
                              <li>
                                  The{' '}
                                  <a href={`/fruits/${i}`}>
                                      {fruit.name} 
                                  </a> 
                                  {' '} 
                                  is {fruit.color}. <br></br>
                                  There is {fruit.calories} {' '}
                                    cal. in each 100gr.
                                  <br /><br></br>
                              </li>
                          );
                      })}
                  </ul>
              </div>
      );
  }
}
module.exports = Index;