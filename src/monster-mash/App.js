import React, {Component} from 'react'
// import './style.css'
import Jumbotron from './Jumbotron'
import MonsterSection from './MonsterSection'
import allMonsters from './monstersData'

class MonsterApp extends Component {
  state = {
    monsters: allMonsters
  }
  filterMonstersByM = () => {
    const updatedMonsters = this.state.monsters.filter((mon) => {
      return mon.name[0] === 'M'
    })
    this.setState({ monsters: updatedMonsters })
  }
  render () {
    return (
      <div>
        <Jumbotron title='Monster Mash' />
        <button onClick={this.filterMonstersByM}>Filter By M</button>
        <MonsterSection monsters={this.state.monsters} />
      </div>
    )
  }
}

export default MonsterApp