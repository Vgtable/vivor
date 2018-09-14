const React = require("react");
const ReactDom = require("react-dom");

class List extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <ul>
      <li>111</li>
      <li>111</li>
      <li>111</li>
      <li>123</li>
    </ul>
  }
}
ReactDom.render(<List/>,document.body);
