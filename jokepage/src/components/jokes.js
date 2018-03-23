import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions';

class Jokes extends Component {
  componentDidMount() {
    this.props.getJokes();
  }

  render() {
    return (
      <ul>
        {this.props.jokes.map((joke, i) => {
          return (
            <div className="joke-container"> 
              <li key={i}>{joke.type}</li>
              <li>{joke.setup}</li>
              <li>{joke.punchline}</li>
            </div>);
        })}
      </ul>
    );
  }
}


const mapStateToProps = state => {
  return {
    jokes: state.jokes
  };
};

export default connect(mapStateToProps, { getJokes })(Jokes);