import React from "react";

class BotPick extends React.Component {
  //your code here

  state = {
    maxDamage:'0-100',
    minHealth:'0-100'
  }

  handleChange = (event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  render(){
  	return (
      <div className='formPick'>
  	  <form onSubmit={(event)=>this.props.filterBots(event,this.state.maxDamage,this.state.minHealth)}>
        <label>
        <h4> Max Damage </h4>
        <input type='text' name='maxDamage' value={this.state.maxDamage} onChange={this.handleChange}/>
        </label>
        <label>
        <h4> Min Health </h4>
        <input type='text' name='minHealth' value={this.state.minHealth} onChange={this.handleChange}/> <br/>
        </label>
        <input type='submit' value='search' />
      </form>
      <br />
      <button onClick={this.props.clearfilter}>clear filter</button>
      </div>
  	);
  }

};

export default BotPick;
