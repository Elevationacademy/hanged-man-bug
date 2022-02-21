import { Component } from "react";

class About extends Component{
  render(){
    return (
      <div> This is an {this.props.value} Game </div>
    );
  }
}

export default About;
