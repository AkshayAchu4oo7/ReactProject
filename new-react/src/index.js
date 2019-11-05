import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById('Newly'));




//variables 
var navbar=(
<ul>
<li>Atest</li>
<li>Btest</li>
<li>Ctest</li>
<li>Dtest</li>
<li>Etest</li>

</ul>
  );
  ReactDOM.render(navbar,document.getElementById('nav'));


  // function components

// function Cars() {
//   return <h2>function components {1+1} nd topic </h2>;
// }

// ReactDOM.render(<Cars />,document.getElementById('classes'));
// //





//test
/* 

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('inputbox'));


//test

//var input= <input type="text"/>;
//ReactDOM.render(input, document.getElementById('inputbox'));

//variables usind var
var come = (
  <div>
<h1>eReact</h1>
<h2>JSX</h2>
<h3>ReactDOM</h3>
</div>
);

//variables usind let
let test= <h1> Adding 5 and 6 will be = {5+6}</h1>;
//variables usind const
const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>

);


ReactDOM.render(test,document.getElementById('dos'));
ReactDOM.render(myelement, document.getElementById('roots'));



ReactDOM.render(come, document.getElementById('root'));
//variables usind direct method
ReactDOM.render(<h1>variables usind direct method {2+1+3-1}</h1>, document.getElementById('sandy'));


//class components
class Car extends React.Component{
  constructor(){
    super();
    this.state={color:"Kshay"};
  }
  render() {
    return<h1> my name is A{this.state.color} </h1>;
  }
}
ReactDOM.render(<Car />,document.getElementById('classess'));

//props state
//
class Test extends React.Component{
 render(){
    return <h2> my Aim to invert some new {this.props.color} </h2>;
  }
}
ReactDOM.render(<Test color="TECHNOLOGY" />,document.getElementById('Test'));

//components in components

class Try1 extends React.Component{
  render(){
    return <h1>first</h1>;
  }
}

class Try2 extends React.Component{
  render(){
    return(
    <div>
    <Try1 />
    <h2>second</h2>
    </div>);
  }
}
class Try3 extends React.Component{
  render(){
    return(
    <div>
    <Try2 />
    <h3>three</h3>
    </div>);
  }
}
class Try4 extends React.Component{
  render(){
    return(
    <div>
    <Try3 />
    <h4>Four</h4>
    </div>);
  }
}



class Final extends React.Component{
  render(){
    return(
<div>
    <Try4 />
<h5>Finally inheritance components in Component complete</h5>
</div>
    );
  }
}

ReactDOM.render(<Final />,document.getElementById('Try'));


//other files values

// ReactDOM.render(<Type />,document.getElementById('Type'));

//button

class Button extends React.Component{
shoot() {
  alert("Hello Button function!");
}
render(){
return(
  <button onClick={this.shoot}>Tclick!</button>
);
}
}

ReactDOM.render(<Button />, document.getElementById('button'));
//second

class New extends React.Component{
  render(){
    return(<div>
    <h1>welcome back</h1>
    <h1>Akshay</h1>
    <h2>this is he place to develop new required application</h2>
    </div>);
  }
}
ReactDOM.render(<New />,document.getElementById('welcome'));


//constructor




class Construc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Construc />, document.getElementById('constructor'));

//updated with snapshop

class SnapShot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="div1"></div>
      <div id="div2"></div>
      </div>
    );
  }
}

ReactDOM.render(<SnapShot />, document.getElementById('snapshot'));

//updated button

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Click me i will disapper!</h1>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('updatedbutton')); */