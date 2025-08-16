// src/App.js
import React, { useState } from "react";
import "./App.css"; // optional if you want custom css

// Class Component Counter
class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="p-6 m-4 bg-blue-100 shadow-lg rounded-2xl text-center w-64">
        <h2 className="text-lg font-bold mb-4">Class Component</h2>
        <p className="text-2xl font-semibold mb-4">{this.state.count}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={this.decrement}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
          >
            -
          </button>
          <button
            onClick={this.increment}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

// Functional Component Counter
function FunctionCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="p-6 m-4 bg-green-100 shadow-lg rounded-2xl text-center w-64">
      <h2 className="text-lg font-bold mb-4">Function Component</h2>
      <p className="text-2xl font-semibold mb-4">{count}</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

// Main App
function App() {
  return (
    <div className="App p-10">
      <h1 className="text-2xl font-bold mb-8 text-center">
        Assignment-2 Counter Application
      </h1>

      <div className="flex justify-center">
        <ClassCounter />
        <FunctionCounter />
      </div>
    </div>
  );
}

export default App;
