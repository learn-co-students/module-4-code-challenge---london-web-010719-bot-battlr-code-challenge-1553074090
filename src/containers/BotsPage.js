import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import BotPick from '../components/BotPick'

class BotsPage extends React.Component {

  state = {
    allBots:[],
    myBots:[],
    botSelected:undefined,
    minHealth:0,
    maxDamage:100
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res=>res.json())
      .then(data=>this.setState({
        allBots:[...data]
      }))
  }

  botNotMine = () => {
    return (this.state.allBots.filter(bot=>!this.state.myBots.includes(bot)&&bot.health>=this.state.minHealth&&bot.damage<=this.state.maxDamage))
  }

  recruitBot = (botHired) => {
    this.setState({
      myBots:this.state.myBots.concat(botHired),
      botSelected:undefined
    })
  }

  showMeBot = (botSelected) => {
    this.setState({
      botSelected:botSelected
    })
  }

  unselectBot = () => {
    this.setState({
      botSelected:undefined
    })
  }

  filterBots = (event, maxDamage,minHealth) => {
    event.preventDefault()
    this.setState({
      minHealth:parseInt(minHealth),
      maxDamage:parseInt(maxDamage)
    })
  }

  clearfilter = () => {
    this.setState({
      minHealth:0,
      maxDamage:100
    })
  }

  lableForCollection = () => {
    if (this.state.minHealth<=0 && this.state.maxDamage>=100) {
      return 'Showing all bots available'
    }
    else {
      return  `Showing bots that have more than ${this.state.minHealth} health and less thaan ${this.state.maxDamage} damage`
    }
  }

  render() {
    return (
      <div>
        <BotPick filterBots={this.filterBots} clearfilter={this.clearfilter}/>
        <YourBotArmy myBots={this.state.myBots} />
        {!!this.state.botSelected?
            <BotSpecs bot={this.state.botSelected} unselectBot={this.unselectBot} recruitBot={this.recruitBot}/> :
            <BotCollection allBots={this.botNotMine()} showMeBot={this.showMeBot} lableForCollection={this.lableForCollection()}/>}
      </div>
    );
  }

}

export default BotsPage;
