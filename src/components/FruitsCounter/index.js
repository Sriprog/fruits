// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {banana: 0, mango: 0}

  onBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  onMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  render() {
    const {banana, mango} = this.state
    return (
      <div className="Flcontainer">
        <h1>
          Bob ate <span className="count-color">{mango}</span> mangoes
          <span className="count-color">{banana}</span> bananas
        </h1>
        <div className="container">
          <div className="fruit">
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <button type="button" className="button1" onClick={this.onMango}>
              Eat Mango
            </button>
          </div>
          <div className="fruit">
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
            <button type="button" className="button1" onClick={this.onBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
