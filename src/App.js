import React, { Component, lazy, Suspense } from "react";
import "./App.css";

// import LazyLoaded from "./LazyLoaded";
const LazyLoaded = lazy(() => import("./LazyLoaded"));

class App extends Component {
  constructor() {
    super();
    this.state = {
      showTheLazyness: false
    };
  }

  toggleChange = () => {
    this.setState({
      showTheLazyness: !this.state.showTheLazyness
    });
  };

  render() {
    return (
      <div className="App">
        Show the lazyness:
        <input
          type="checkbox"
          checked={this.state.showTheLazyness}
          onChange={this.toggleChange}
        />
        <br />
        {this.state.showTheLazyness ? (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyLoaded />
          </Suspense>
        ) : null}
      </div>
    );
  }
}

export default App;
