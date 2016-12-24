import React from "react";
import ReactDOM from "react-dom";
 
var RenderMap = React.createClass({
  render: function() {
    return (
      <p>Map of {this.props.greetTarget} <button onClick={this.handleClick} id="map">Click Here</button></p>
    );
  }	
});

var Child = React.createClass({
	handleClick: function(e) {
    e.preventDefault();
	var map = e.target.value;
	this.props.onClick{map};  
    console.log('The link was clicked.');
  },
	render: function() {
		return (
			<div id="image" onClick{this.handleClick}></div>
		);
	}
});
 
ReactDOM.render(
  <div>
    <RenderMap greetTarget="New York"/>
    <RenderMap greetTarget="San Francisco"/>
    <RenderMap greetTarget="Chicago"/>
    <RenderMap greetTarget="Miami"/>
    <RenderMap greetTarget="Los Angeles"/>
    <RenderMap greetTarget="Seattle"/>
	<RenderMap greetTarget="Washington DC"/>
  </div>,
  document.querySelector("#container")
);  