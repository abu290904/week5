import './App.css';

function GreetingElement() {
  const greeting = 'Hello, Welcome to Functional Components!';
  return (
    <div className="App">
      <h1>{greeting}</h1>
    </div>
  );
}

export default GreetingElement;
