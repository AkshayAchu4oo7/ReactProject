import React from 'react';
import ReactDOM from 'react-dom';

var navbar=(
<ul>
<li><a>Atest</a></li>
<li><a>Btest</a></li>
<li><a>Ctest</a></li>
<li><a>Dtest</a></li>
<li><a>Etest</a></li>
</ul>
  );



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

ReactDOM.render(navbar,document.getElementById('nav'));
ReactDOM.render(test,document.getElementById('do'));
ReactDOM.render(myelement, document.getElementById('roots'));



ReactDOM.render(come, document.getElementById('root'));
//variables usind direct method
ReactDOM.render(<h1>Elemenrssfjsjf</h1>, document.getElementById('sandy'));
