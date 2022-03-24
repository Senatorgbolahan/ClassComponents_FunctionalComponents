import React, {Component} from 'react';

class ClassCounter extends Component{
      constructor(props){
        super(props)
        this.state ={
          counts: 0
        }
      }

      incrementsCount = () =>{
         this.setState({
           counts: this.state.counts + 1
         })
      }
      decrementsCount = () =>{
        this.setState({
          counts: this.state.counts - 1
        })
     }

      render() {
        return(
          <>
              <button onClick={this.incrementsCount}>
              Count - {this.state.counts}
              </button>
              <br/>
              <br/>
              <button onClick={this.incrementsCount}>
              Count - {this.state.counts}
              </button>
          </>
        )
      }

}

export default ClassCounter;