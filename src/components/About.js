import { Component } from "react";

class About extends Component{
  render(){
    return (
      <div> This is a {this.props.value} Game </div>
    );
  }
}

export default About;
