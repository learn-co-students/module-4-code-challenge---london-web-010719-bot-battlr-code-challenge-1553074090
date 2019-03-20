import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    allBots:[],
    myBots:[]
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res=>res.json())
      .then(data=>this.setState({
        allBots:[...data]
      }))
  }

  botNotMine = () => {
    return (this.state.allBots.filter(bot=>!this.state.myBots.includes(bot)))
  }

  recruitBot = (botHired) => {
    this.setState({
      myBots:this.state.myBots.concat(botHired)
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} />
        <BotCollection allBots={this.botNotMine()} recruitBot={this.recruitBot} />
      </div>
    );
  }

}

export default BotsPage;
