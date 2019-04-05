import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        eq: '',
        ans: 0
    };
  }

  handleChange = (event) => {
    this.setState({eq: event.target.value})
    event.preventDefault();
  }

  clkMathEq = event => {
    let eqStr = event.target.innerText
    this.setState(prevState => {
        return{
            eq: prevState.eq + eqStr
        }
    })
    event.preventDefault();
  }

  convertModToPercent(val){
    let rawEq = val
    rawEq.includes('%') ? rawEq = rawEq.replace('%', '*1/100*') : val
    let ansEval = eval(rawEq)
    return ansEval
  }

  clkEquals = event => {
    let ansEval = this.convertModToPercent(this.state.eq)
    this.setState({ans:ansEval})
    event.preventDefault()
  }

  clkClear = event => {
    this.setState({ans:0,eq:''})
  }

  handleKeyDown = event => {
    let ansEval = this.convertModToPercent(this.state.eq)
    //clear the answer field
    this.setState({ans:ansEval})
    if(this.state.eq === ''){this.setState({ans: ''})} 
    event.preventDefault()  
  }

  render() {
      
    return (
      <div className="container">
      <div className="inner-cont">
        <h1><i>React Math Master</i></h1>
        <form>
            <div className="inputs">
                <input
                type="text"
                value={this.state.eq}
                onChange={this.handleChange}
                onKeyUp={this.handleKeyDown}
                autoFocus
                
                />
                <span className="equalsSign">=</span>
                <input
                type="text"
                value={this.state.ans}
                onChange={this.handleChange}
                
                
                />
            </div> 
            <div>
                <button type="button"  onClick={this.clkMathEq}>1</button>
                <button type="button"  onClick={this.clkMathEq}>2</button>
                <button type="button"  onClick={this.clkMathEq}>3</button>
                <button type="button"  onClick={this.clkMathEq}>4</button>
                <button type="button"  onClick={this.clkMathEq}>5</button>
                <button type="button"  onClick={this.clkMathEq}>6</button>
                <button type="button"  onClick={this.clkMathEq}>7</button>
                <button type="button"  onClick={this.clkMathEq}>8</button>
                <button type="button"  onClick={this.clkMathEq}>9</button>
                <button type="button"  onClick={this.clkMathEq}>0</button>
                <button type="button"  onClick={this.clkMathEq}>.</button>
            </div>
            <div>
                <button type="button"  onClick={this.clkMathEq}>+</button>
                <button type="button"  onClick={this.clkMathEq}>-</button>
                <button type="button"  onClick={this.clkMathEq}>*</button>
                <button type="button"  onClick={this.clkMathEq}>/</button>
                <button type="button"  onClick={this.clkMathEq}>%</button>
                <button type="button"  onClick={this.clkEquals}>=</button>
                
                <button type="button"  onClick={this.clkClear}>C</button>
            </div>

          {/* <input type="submit" value="Submit" /> */}
        </form>
        </div>
      </div>

    );
  }
}

export default Calculator;
