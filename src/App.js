import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          AGE : <span> {this.props.age}</span>
        </div>
        <br />
        <div>
          <button onClick={this.props.onAgeup}>Age up</button>
          <button onClick={this.props.onAgeDown}>Age down</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeup: () => dispatch({ type: "AGE_UP" }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
