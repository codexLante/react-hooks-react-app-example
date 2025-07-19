import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Now</h1>
      </header>
      <ExampleComponent />
      <TestComponent />
    </div>
  );
}

export default App;
