const React = require('react');

class IndexCar extends React.Component {
  render() {
      const { cars } = this.props;
      return (
              <div style={{ lineHeight: '35px', color:'blue'}}>
                  <h1>Cars Index Page</h1>
                  <ul style={{ listStyleType: 'circle'}} >
                      {cars.map((car, i) => {
                          return (
                            <li key={i}>
                            The{' '}
                            <a href={`/cars/${i}`}>
                              {car.model}
                            </a>{' '}
                            made by {car.make} in {car.year}.
                          </li> 
                              
                          );
                      })}
                  </ul>
              </div>
      );
  }
}
module.exports = IndexCar