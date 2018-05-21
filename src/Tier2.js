import React, { Component } from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      ...this.state, 
      color: nextProps.color, 
      childColor: getReducedColor(nextProps.color),
    })
  }

  handleClick = (e) => {
    let newColor = getRandomColor()
    e.stopPropagation()
    this.setState({
      ...this.state, 
      color: newColor, 
      childColor: getReducedColor(newColor)
    })
  }

  handleChildClick = (e) => {
    e.stopPropagation()
    this.setState({
      ...this.state, 
      childColor: getRandomColor()
    })
  }

  render() {
    return (
      <div className="tier2" 
      style={{backgroundColor: this.state.color, color: this.state.color}} onClick={this.handleClick}>
        <Tier3 color={this.state.childColor} handleChildClick={this.handleChildClick}/>
        <Tier3 color={this.state.childColor} handleChildColor={this.handleChildClick} />
      </div>
    )
  }
}
