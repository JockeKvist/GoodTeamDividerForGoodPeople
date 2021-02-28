import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AddPlayers from './AddPlayers';
import Button from '@material-ui/core/Button';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


export class Home extends Component {
  static displayName = Home.name;
  constructor(props) {
    super(props);
    this.state = { players: ["test", "test1", "test2", "test3", "test4"], showTeams: false};
  }

  addPlayerToPlayerList = (newPlayer) => {
    this.setState(prevState => ({
      players: [...prevState.players, newPlayer]
    }))
  }

  showTable = () => {
    
    console.log(this.state.players)
    const arrayToSplice = this.state.players;
    arrayToSplice.sort(() => 0.5 - Math.random())
    console.log(arrayToSplice)
    var half_length = Math.ceil(arrayToSplice.length / 2);
    var leftSide = arrayToSplice.splice(0,half_length);
    var rightSide = arrayToSplice.slice(half_length,leftSide)
    console.log(leftSide)
    console.log(rightSide)
    
    
    
    this.setState({ showTeams: !this.state.showTeams });
  }

  render() {
    return (
      <div>
        <List>
          <label>Players</label>
          {this.state.players.map((item) => (
            <ListItem>{item}</ListItem>
          ))}
        </List>

        <AddPlayers parentCallBack={this.addPlayerToPlayerList} />
        
        <div hidden={this.state.showTeams}>
          <Table>
            <TableHead>
              <TableRow>
                  <TableCell>Team 1</TableCell>
                  <TableCell>Team 2</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
               
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        <Button onClick={this.showTable}>Split into teams</Button>
      </div>
    );
  }
}

