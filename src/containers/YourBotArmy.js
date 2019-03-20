import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            <h3>My bot army</h3>
            {this.props.myBots.map(bot=> !!bot && <BotCard bot={bot}/>)}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
