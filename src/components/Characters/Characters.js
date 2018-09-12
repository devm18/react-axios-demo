import React, { Component } from "react";
import axios from "axios";
import Character from "./Character/Character";

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      newCharacter: ""
    };
  }

  componentDidMount() {
    axios.get("https://www.swapi.co/api/people").then(response => {
      console.log(response);
      this.setState({ characters: response.data.results });
    });
  }

  deleteHandler = index => {
    const charactersCopy = this.state.characters.slice();
    charactersCopy.splice(index, 1);
    this.setState({ characters: charactersCopy });
  };

  changeHandler = e => {
    this.setState({ newCharacter: e.target.value });
  };

  submitHandler = () => {
    this.setState({
      characters: [...this.state.characters, { name: this.state.newCharacter }],
      newCharacter: ""
    });
  };

  render() {
    console.log("local state ", this.state);
    let myCharacters = this.state.characters.map((character, index) => {
      //   console.log(character);
      return (
        <div key={index}>
          <Character
            obj={character}
            deleteName={this.deleteHandler}
            id={index}
          />
        </div>
      );
    });

    return (
      <div>
        <input
          onChange={e => this.changeHandler(e)}
          placeholder="Add new Character"
        />
        <button onClick={this.submitHandler}>Submit</button>
        {myCharacters}
      </div>
    );
  }
}

export default Characters;
