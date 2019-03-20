import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
        <h3>{this.props.lableForCollection}</h3>
    		<div className="row">
    		  {this.props.allBots.map(bot=> !!bot && <BotCard bot={bot} recruitBot={this.props.recruitBot} showMeBot={this.props.showMeBot}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
