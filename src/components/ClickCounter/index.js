// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  clickMe = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">
          The Button has been clicked <span className="count-num">{count}</span>
          times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <button className="button" onClick={this.clickMe}>
          click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
