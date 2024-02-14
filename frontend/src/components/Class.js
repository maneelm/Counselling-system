import React, { Component } from 'react'

export class Class extends Component {
  render() {
    return (
      <div align='center'><h1>Welcome to Class {this.props.name} with id {this.props.id}</h1></div>
    )
  }
}
export default Class