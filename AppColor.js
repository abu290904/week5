import './App.css';

function AppColor(props) {
  function changeColor(e) {
    document.body.style.background = e.target.value;
    alert(`Background color changed to ${e.target.value}`);
  }

  return (
    <div className="App">
      <h1>{props.heading}</h1>
      <label>{props.label}</label>
      <input id={props.color} type="text" placeholder="Enter your name" />
      <button value={props.color} onClick={changeColor}>
        Change to {props.color}
      </button>
    </div>
  );
}

export default AppColor;
